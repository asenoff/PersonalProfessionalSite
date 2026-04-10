import { getCollection } from "astro:content";
import { navItems } from "../data/site";
import { escapeXml, toAbsoluteUrl, toIsoDateOrNull } from "../lib/seo";

type SitemapEntry = {
  path: string;
  lastmod?: string | null;
};

const renderEntry = ({ path, lastmod }: SitemapEntry) => {
  const lines = [`  <url>`, `    <loc>${escapeXml(toAbsoluteUrl(path))}</loc>`];

  if (lastmod) {
    lines.push(`    <lastmod>${escapeXml(lastmod)}</lastmod>`);
  }

  lines.push("  </url>");

  return lines.join("\n");
};

export async function GET() {
  const [articles, workItems] = await Promise.all([
    getCollection("articles"),
    getCollection("work")
  ]);

  const staticEntries = navItems.map((item) => ({
    path: item.href
  }));

  const articleEntries = articles.map((article) => ({
    path: `/articles/${article.slug}`,
    lastmod: toIsoDateOrNull(article.data.publishedAt)
  }));

  const workEntries = workItems.map((workItem) => ({
    path: `/work/${workItem.slug}`
  }));

  const uniqueEntries = [...staticEntries, ...articleEntries, ...workEntries].filter(
    (entry, index, entries) => entries.findIndex((candidate) => candidate.path === entry.path) === index
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...uniqueEntries.map(renderEntry),
    "</urlset>"
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
