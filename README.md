# Kaloyan Asenov Personal Site

Initial AstroJS boilerplate for a static personal professional website focused on architecture, routing, shared components, and placeholder content.

## Requirements

- Node.js 20+ recommended
- npm 10+ recommended

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Where to edit content

- Top-level page content: `src/pages/*.astro`
- Work item content: `src/content/work/*.md`
- Article content: `src/content/articles/*.md`
- Shared site identity, navigation, and placeholder data: `src/data/site.ts`

## Where to edit global metadata

- Site-wide defaults and identity: `src/data/site.ts`
- Astro site URL and static output config: `astro.config.mjs`
- Shared head/meta tags: `src/components/SeoHead.astro`

## Static hosting notes for cPanel

- The project is configured for static output with `output: "static"`.
- Run `npm run build` on a machine with Node.js installed.
- Upload the contents of `dist/` to your cPanel document root, or to the target subdirectory if the site is hosted below the root domain.
- No Node runtime, SSR process, database, or server adapter is required on the host.

## Notes

- This scaffold intentionally keeps styling minimal.
- Dynamic routes for `/articles/[slug]` and `/work/[slug]` are generated from Astro content collections.
