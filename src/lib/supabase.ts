import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mlgtpvyaazvykdgwdypt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sZ3RwdnlhYXp2eWtkZ3dkeXB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5NDUyNDQsImV4cCI6MjA3ODUyMTI0NH0.WiVBqveap7o1BD3eQqv4diCMlwD80jrieg7NA7d8d2A';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Article {
  id: string;
  title: string;
  content: string;
  image_url: string;
  author: string;
  created_at: string;
}

export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }

  return data || [];
}

export async function getArticleById(id: string): Promise<Article | null> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .maybeSingle();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }

  return data;
}
