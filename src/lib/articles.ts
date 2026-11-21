// Articles for the landing page, from the To Order database (admin → Marketing → Articles,
// ADM-104). Only published articles are readable without signing in (row-level security).
// The project address and publishable key are public by design: the key reaches only what
// the database's security rules allow. They can be overridden with VITE_TOORDER_SUPABASE_URL
// and VITE_TOORDER_SUPABASE_KEY; the older VITE_SUPABASE_* names are not used, so a stale
// value in the hosting settings cannot point the site at another project.
import { createClient } from "@supabase/supabase-js";
import { markdownToHtml, markdownToText } from "./markdown";

const SUPABASE_URL = import.meta.env.VITE_TOORDER_SUPABASE_URL || "https://mlgtpvyaazvykdgwdypt.supabase.co";
const SUPABASE_KEY =
  import.meta.env.VITE_TOORDER_SUPABASE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZ3RwdnlhYXp2eWtkZ3dkeXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDUyNDQsImV4cCI6MjA3ODUyMTI0NH0.WiVBqveap7o1BD3eQqv4diCMlwD80jrieg7NA7d8d2A";
const CDN = "https://cdn.toorder.info";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false, autoRefreshToken: false } });

export interface Article {
  /** The article's web address (its slug) */
  id: string;
  title: string;
  /** Safe HTML made from the Markdown text */
  content: string;
  excerpt?: string;
  imageUrl: string | null;
  author: string | null;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Row {
  id: string;
  slug: string;
  title_ar: string;
  summary_ar: string | null;
  body_ar: string;
  author_name: string | null;
  published_at: string;
  updated_at: string;
  cover: { object_key: string } | null;
}

const COLUMNS = "id,slug,title_ar,summary_ar,body_ar,author_name,published_at,updated_at,cover:files!articles_cover_file_id_fkey(object_key)";

/** A resized image address on the To Order CDN. */
function imageUrl(objectKey: string | undefined, width: number): string | null {
  if (!objectKey) return null;
  return `${CDN}/cdn-cgi/image/width=${width},format=auto/${objectKey.replace(/^\/+/, "")}`;
}

/** Without an uploaded cover, the first picture at the top of the text is the cover (and is not repeated in it). */
export function splitLeadImage(markdown: string): { cover: string | null; body: string } {
  const m = /^\s*!\[[^\]]*\]\((https:\/\/[^)\s]+)\)\s*/.exec(markdown);
  return m ? { cover: m[1], body: markdown.slice(m[0].length) } : { cover: null, body: markdown };
}

function toArticle(r: Row, width: number): Article {
  const lead = r.cover ? { cover: null, body: r.body_ar } : splitLeadImage(r.body_ar);
  const text = markdownToText(lead.body);
  return {
    id: r.slug,
    title: r.title_ar,
    content: markdownToHtml(lead.body),
    excerpt: r.summary_ar || text.slice(0, 160),
    imageUrl: imageUrl(r.cover?.object_key, width) ?? lead.cover,
    author: r.author_name,
    isPublished: true,
    createdAt: new Date(r.published_at),
    updatedAt: new Date(r.updated_at),
  };
}

/** Published articles, newest first. */
export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase.from("articles").select(COLUMNS).order("published_at", { ascending: false }).limit(30);
  if (error) {
    console.error("Error fetching articles:", error.message);
    return [];
  }
  return ((data ?? []) as unknown as Row[]).map((r) => toArticle(r, 768));
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Addresses of articles from the old Firebase site, so links already shared keep working. */
const LEGACY_IDS: Record<string, string> = {
  c7mgcqOLScCX0bL8CZuZ: "to-order-smart-saving",
};

/** One published article by its web address (slug) or id. */
export async function getArticleById(idOrSlug: string): Promise<Article | null> {
  idOrSlug = LEGACY_IDS[idOrSlug] ?? idOrSlug;
  const { data, error } = await supabase
    .from("articles")
    .select(COLUMNS)
    .eq(UUID.test(idOrSlug) ? "id" : "slug", idOrSlug)
    .maybeSingle();
  if (error) {
    console.error("Error fetching the article:", error.message);
    return null;
  }
  return data ? toArticle(data as unknown as Row, 1536) : null;
}
