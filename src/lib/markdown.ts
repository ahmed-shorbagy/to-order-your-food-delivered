// A small, safe Markdown-to-HTML converter for articles written in the To Order admin
// (docs/plan/07, ADM-104). Everything is HTML-escaped first, so an article cannot inject
// markup or scripts; only https links and images are turned into tags.
// Supported: # headings (shown from h2, the page title is the h1), paragraphs, line breaks,
// - / * and 1. lists, > quotes, **bold**, *italic*, `code`, [text](https://...) and
// ![alt](https://...).

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const SAFE_URL = /^https:\/\/[^\s"'<>]+$/;

function inline(text: string): string {
  return text
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (m, alt: string, url: string) =>
      SAFE_URL.test(url) ? `<img src="${url}" alt="${alt}" loading="lazy" />` : m,
    )
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, label: string, url: string) =>
      SAFE_URL.test(url) ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>` : m,
    )
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>");
}

export function markdownToHtml(markdown: string): string {
  const blocks = escapeHtml(markdown.replace(/\r\n?/g, "\n"))
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
  return blocks
    .map((block) => {
      const lines = block.split("\n").map((l) => l.trim());
      const heading = /^(#{1,4})\s+(.+)$/.exec(block);
      if (heading && lines.length === 1) {
        const level = Math.min(heading[1].length + 1, 4);
        return `<h${level}>${inline(heading[2])}</h${level}>`;
      }
      if (lines.every((l) => /^[-*]\s+/.test(l))) {
        return `<ul>${lines.map((l) => `<li>${inline(l.replace(/^[-*]\s+/, ""))}</li>`).join("")}</ul>`;
      }
      if (lines.every((l) => /^\d+[.)]\s+/.test(l))) {
        return `<ol>${lines.map((l) => `<li>${inline(l.replace(/^\d+[.)]\s+/, ""))}</li>`).join("")}</ol>`;
      }
      if (lines.every((l) => l.startsWith("&gt;"))) {
        return `<blockquote><p>${lines.map((l) => inline(l.replace(/^&gt;\s?/, ""))).join("<br />")}</p></blockquote>`;
      }
      return `<p>${lines.map(inline).join("<br />")}</p>`;
    })
    .join("\n");
}

/** The plain text of Markdown, for descriptions and reading time. */
export function markdownToText(markdown: string): string {
  return markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#>*`_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
