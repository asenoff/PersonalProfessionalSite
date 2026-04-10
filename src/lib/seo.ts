import { siteOrigin } from "../config/site-origin.js";
import { siteConfig } from "../data/site";

export type SeoSchema = {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
};

export type SeoSchemaInput = SeoSchema | SeoSchema[];

type WebPageSchemaInput = {
  title?: string;
  description?: string;
  path?: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ArticleSchemaInput = {
  title: string;
  description: string;
  path: string;
  publishedAt?: string;
  tags?: string[];
};

const titleCaseWord = (word: string) =>
  word.length === 0 ? word : `${word[0]?.toUpperCase() ?? ""}${word.slice(1)}`;

const humanizeSegment = (segment: string) =>
  segment
    .split("-")
    .filter(Boolean)
    .map(titleCaseWord)
    .join(" ");

export const normalizePath = (inputPath = "/") => {
  const trimmedPath = inputPath.trim();

  if (trimmedPath.length === 0) {
    return "/";
  }

  const url = trimmedPath.startsWith("http://") || trimmedPath.startsWith("https://")
    ? new URL(trimmedPath)
    : new URL(trimmedPath.startsWith("/") ? trimmedPath : `/${trimmedPath}`, siteOrigin);

  const pathname = url.pathname === "" ? "/" : url.pathname;

  if (pathname !== "/" && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
};

export const toAbsoluteUrl = (inputPath = "/") => {
  if (inputPath.startsWith("http://") || inputPath.startsWith("https://")) {
    return new URL(inputPath).toString();
  }

  return new URL(normalizePath(inputPath), siteOrigin).toString();
};

export const toSchemaArray = (schema?: SeoSchemaInput) => {
  if (!schema) {
    return [];
  }

  return Array.isArray(schema) ? schema : [schema];
};

export const buildWebsiteSchema = (): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.defaultDescription
});

export const buildPersonSchema = (): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.summary,
  jobTitle: siteConfig.jobTitle,
  sameAs: siteConfig.seo.sameAs
});

export const buildWebPageSchema = ({
  title,
  description = siteConfig.defaultDescription,
  path = "/"
}: WebPageSchemaInput): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title ? `${title} | ${siteConfig.name}` : siteConfig.defaultTitle,
  description,
  url: toAbsoluteUrl(path),
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.siteUrl
  }
});

export const buildBreadcrumbSchema = (items: BreadcrumbItem[]): SeoSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteUrl(item.path)
  }))
});

export const buildBreadcrumbItems = (path = "/", currentLabel?: string): BreadcrumbItem[] => {
  const normalizedPath = normalizePath(path);

  if (normalizedPath === "/") {
    return [{ name: "Home", path: "/" }];
  }

  const segments = normalizedPath.split("/").filter(Boolean);
  const breadcrumbItems: BreadcrumbItem[] = [{ name: "Home", path: "/" }];

  segments.forEach((segment, index) => {
    const isLastSegment = index === segments.length - 1;
    const label = isLastSegment && currentLabel ? currentLabel : humanizeSegment(segment);
    const itemPath = `/${segments.slice(0, index + 1).join("/")}`;

    breadcrumbItems.push({
      name: label,
      path: itemPath
    });
  });

  return breadcrumbItems;
};

export const buildDefaultPageSchema = ({
  title,
  description,
  path = "/"
}: WebPageSchemaInput): SeoSchema[] => [
  buildWebPageSchema({ title, description, path }),
  buildBreadcrumbSchema(buildBreadcrumbItems(path, title))
];

export const buildArticleSchema = ({
  title,
  description,
  path,
  publishedAt,
  tags = []
}: ArticleSchemaInput): SeoSchema => {
  const publishedIsoDate = toIsoDateOrNull(publishedAt);
  const schema: SeoSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: toAbsoluteUrl(path),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": toAbsoluteUrl(path)
    },
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl
    }
  };

  if (publishedIsoDate) {
    schema.datePublished = publishedIsoDate;
  }

  if (tags.length > 0) {
    schema.keywords = tags.join(", ");
  }

  return schema;
};

export const toIsoDateOrNull = (value?: string) => {
  if (!value) {
    return null;
  }

  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate.toISOString();
};

export const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;")
    .replaceAll("'", "&apos;");
