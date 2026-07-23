# Local Signal Websites

Source for [localsignalwebsites.studio](https://www.localsignalwebsites.studio) — the Local Signal Websites studio site. Next.js App Router, React, Tailwind CSS v4, deployed on Vercel. Package manager is Bun.

## Commands

```bash
bun install        # install dependencies
bun run dev        # local dev server
bun run build      # production build
bun run start      # serve the production build
bun run lint       # eslint
bun run audit:seo  # SEO/metadata contract checks against a running server (default http://127.0.0.1:3000)
bun run audit:live # same contract checks against production
```

## Structure

- `src/app/` — App Router pages, `robots.ts`, `sitemap.ts`, `llms.txt/route.ts`
- `src/components/` — Navigation, Footer, ContactForm (Formspree), FaqAccordion, Analytics (Vercel Web Analytics + lead events), JsonLd
- `src/lib/` — `seo.ts` (structured data builders), `attribution.ts` (privacy-clean campaign attribution)
- `next.config.ts` — security headers (CSP, HSTS, frame/content-type protections)
- `scripts/` — dependency-free SEO and live-site audit scripts used by CI
- `.github/workflows/` — PR gate (lint, build, SEO audit) and daily live-site audit

## Operating notes

- Lead flow: Formspree form on `/contact` with session-level campaign attribution attached at submit; fallback email is published on the site. Vercel Web Analytics records pageviews plus Contact CTA / Lead Form Started / Submitted / Success events (enable Web Analytics for the project in the Vercel dashboard).
- The care-plan pricing and the FAQ text feed the visible page and the FAQPage structured data from the same arrays in `src/app/services/page.tsx` — edit once, both update.
