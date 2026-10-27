# Dukeel Transportation

Marketing site for Dukeel Transportation & Freight Corporation, built with Next.js App Router,
Tailwind CSS, and Framer Motion, and deployed to Cloudflare Workers with
[OpenNext](https://opennext.js.org/cloudflare).

Production: <https://dukeeltransport.com> (and `www.dukeeltransport.com`)

## Run locally

```bash
npm ci
npm run dev        # Next.js dev server
npm run preview    # Build the Worker and run it locally in workerd
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy to Cloudflare

The Worker is `dukeel-transport-site` (see `wrangler.jsonc`). Its routes attach the
`dukeeltransport.com` and `www.dukeeltransport.com` custom domains; Wrangler creates the
proxied DNS records on the zone.

Wrangler needs two environment variables. Do not commit them.

- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_API_TOKEN` with Workers Scripts: Edit, Workers Routes: Edit, and DNS: Edit on the zone

```bash
npm run deploy     # opennextjs-cloudflare build && deploy
npm run upload     # upload a new version without promoting it (preview URL)
```

Rollback: `npx wrangler rollback` returns production to the previous Worker version, or pick a
version under Workers & Pages > dukeel-transport-site > Deployments in the dashboard.

### Notes

- Every route is statically prerendered, so `open-next.config.ts` serves prerendered pages from
  Workers static assets. No R2 or KV binding is needed.
- Images are pre-encoded WebP files under `public/media/dukeel`; `lib/image-loader.ts` maps
  `next/image` widths onto them, so no Cloudflare Images binding is needed.
- Page security headers (CSP, HSTS, frame, referrer) are set in `next.config.ts`. Static asset
  cache headers are in `public/_headers`.

## Content guardrails

- Use the canonical logo in `public/brand` unchanged. Never redraw or recolour it.
- All photography is illustrative AI cinematography. See `docs/MEDIA_LEDGER.md`.
- Do not publish unverified registrations (SAM.gov, CAGE, DOT/MC), certifications, fleet size,
  clients, awards, or delivery guarantees.
- The contact page uses pre-filled `mailto:` routes. There is no server-side intake yet.

## Project structure

```text
app/                 routes: /, /services, /government-contracting, /about, /contact
components/brand/    canonical logo framing
components/home/     homepage sections (hero video, services, procurement, CTA)
components/layout/   navbar, footer
components/shared/   page hero, step list, target markets, headings
lib/                 site config, content data, image loader
public/brand/        canonical logo files
public/media/dukeel/ optimized photography and hero video
docs/                media source ledger
```
