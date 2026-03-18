# Dukeel Transportation

A modern logistics website built with Next.js App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
app/
  about/
  contact/
  government-contracting/
  services/
  globals.css
  layout.tsx
  page.tsx
components/
  graphics/
  home/
  layout/
  shared/
lib/
  data.ts
  site.ts
public/
  site-preview.svg
```

## Notes

- Homepage includes an animated truck built with Framer Motion and layered CSS styling.
- Metadata, sitemap, and robots files are included for SEO readiness.
- Styling is tailored for a premium government-contractor tone using navy, blue, and orange accents.
- ESLint is configured with the modern flat config format for Next.js 15+.
