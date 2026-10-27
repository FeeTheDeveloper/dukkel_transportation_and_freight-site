# Media source ledger

All photography and motion on the site is AI-generated **illustrative** cinematography.
None of it depicts Dukeel equipment, facilities, staff, or operations, and the site
footer says so. Do not caption any of it as actual Dukeel fleet or personnel.

| Placement | Files (`public/`) | Source | Runway task ID | Creator / workspace | License | Review |
|---|---|---|---|---|---|---|
| Home hero (still, LCP + fallback), About hero, OG image | `media/dukeel/hero-still-{640,960,1280,1920}.webp`, `og-image.jpg` | Runway, GPT Image 2.5 Flare, 16:9. Prompt: "Single premium cinematic editorial photograph for a Texas veteran-owned freight and logistics company…" | `78264816-9e3f-4f11-8fa1-2effb9be4beb` | Fee The Developer, Runway Fee workspace | Runway generation, commercial use per workspace plan | Approved: no legible badges or text, no people |
| Freight Transportation card, Services hero, CTA band | `media/dukeel/freight-road-*.webp` | Runway, GPT Image 2.5 Flare. Prompt: "Standalone high-end commercial logistics photography for a veteran-owned freight company website…" | `c7c06f76-1d0a-47c1-97b9-729fadd5e645` | same | same | Approved. Skyline is generic; grille has no legible badge |
| Government & Defense Logistics card, procurement section, Government hero | `media/dukeel/government-logistics-*.webp` | Runway, GPT Image 2.5 Flare. Prompt: "Standalone photorealistic premium editorial photograph inside a massive American freight logistics t…" | `09381e0b-de57-4811-a0ba-8b4d7cfc6719` | same | same | Approved. Small grille emblem is not legible at display sizes |
| Priority Freight card, Contact hero | `media/dukeel/priority-freight-*.webp` | Runway, GPT Image 2.5 Flare. Prompt: "Single cinematic high-end logistics photo: unbranded dark navy Class 8 semi tractor and clean silver…" | `2e62c34a-6508-4421-b393-58019ea8a99b` | same | same | Approved. Tiny cab-side text not legible |
| Home hero loop | `media/dukeel/hero-loop.mp4` (1280x720, H.264, no audio, 15 s, 1.7 MB), `hero-loop-poster.webp` | Runway multi-shot video (3 shots). Prompt: "Cinematic low-angle slow tracking shot of an immaculate unbranded midnight navy…" | `f208504e-2833-447d-9796-ed27664d9984` | same | same | **Owner approval needed.** Shot 1 shows a small invented circular emblem on the cab door; not legible but not a Dukeel mark |
| Dedicated Hauling card | `media/dukeel/interstate-aerial-*.webp` | Frame at 4.5 s of the hero loop above | `f208504e-…` | same | same | Approved |
| Contract-Based Transportation card | `media/dukeel/contract-terminal-*.webp` | Frame at 12.5 s of the hero loop above | `f208504e-…` | same | same | Approved |
| Not placed | — | Runway, GPT Image 2.5 Flare, "logistics team concept" | `bb5c7998-9e26-4a90-9abb-465d8930c7c9` | same | same | **Not used.** AI-generated people would read as Dukeel staff. Hold until the owner decides (handoff decision 5) |

## Brand

| File | Source | Notes |
|---|---|---|
| `brand/dukeel-original-logo.png` | `DUKEEL-ORIGINAL-LOGO.png` from the owner handoff | Byte-for-byte copy of the canonical logo (1536x1024, white background) |
| `brand/dukeel-logo-960.webp` | Straight downscale of the canonical PNG | Displayed with a CSS crop around the padding; artwork never redrawn or recoloured |
| `app/icon.png` | Crop of the shield from the canonical PNG, padded on white | Favicon |

No transparent logo variant has been made. Derive one only after owner QA.

## Encoding

Stills: `ffmpeg -vf scale=W:-2:flags=lanczos -c:v libwebp -quality 78` at 640/960/1280/1920 px.
`lib/image-loader.ts` maps `next/image` widths onto these files.
Video: `ffmpeg -an -vf scale=1280:-2 -c:v libx264 -preset slow -crf 27 -movflags +faststart`.
