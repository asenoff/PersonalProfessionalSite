import { siteConfig } from "../data/site";

export function GET() {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /api/",
    `Sitemap: ${siteConfig.siteUrl}/sitemap.xml`
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
