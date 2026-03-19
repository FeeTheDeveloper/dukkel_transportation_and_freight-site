# Dukeel Transportation

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/FeeTheDeveloper/dukkel_transportation_and_freight-site)

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

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Vercel should detect `Next.js` automatically.
4. Use the default project settings:
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`
5. Deploy the project.

This project does not currently require any environment variables for deployment.
The repo also includes a minimal [vercel.json](c:/Users/uveav/OneDrive/Documents/GitHub/dukkel_transportation_and_freight-site/vercel.json) with production-friendly security headers.

### Recommended Vercel setup

- Framework preset: `Next.js`
- Node version: use Vercel default or a current LTS release
- Production branch: `main`
- Domain: connect your production domain after the first successful deploy

### Post-deploy checks

- Confirm the homepage, services, government contracting, about, and contact pages all load correctly
- Confirm `robots.txt` and `sitemap.xml` are available
- Confirm contact links open the correct email address and phone number
- Confirm the hero truck asset renders correctly in production

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
  truck.svg
```

## Notes

- Homepage includes an animated truck built with Framer Motion and layered CSS styling.
- Metadata, sitemap, and robots files are included for SEO readiness.
- Styling is tailored for a premium government-contractor tone using navy, blue, and orange accents.
- ESLint is configured with the modern flat config format for Next.js 15+.
