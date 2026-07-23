export const dynamic = "force-static";

const content = `# Local Signal Websites

Local Signal Websites is a web design studio in Western North Carolina run by Chad Thompson. The studio builds custom websites for artists, creators, and small businesses: clean design, fast performance, and full code ownership. It is the ownership-first web lane connected to Signal Workshop (https://www.signalworkshop.studio/).

## Canonical pages

- Home: https://www.localsignalwebsites.studio/
- Services and pricing: https://www.localsignalwebsites.studio/services
- Portfolio: https://www.localsignalwebsites.studio/portfolio
- About: https://www.localsignalwebsites.studio/about
- Contact: https://www.localsignalwebsites.studio/contact

## Services

- Starter Site: custom one-page website, mobile-responsive, contact form, basic SEO, hosting setup, source code handoff.
- Business Site: up to 7 custom pages, brand design system, advanced SEO with structured data, forms, performance optimization, full code ownership.
- Custom Build: full-scope design and development for e-commerce, web apps, membership sites, and dashboards.
- Website care plans: ongoing updates, monitoring, backups, and edits for live sites.
- Add-ons: logo and brand identity, copywriting, SEO audit and strategy, social media setup.

## Commercial details

- Starter Site: from $800
- Business Site: from $2,000
- Custom Build: quoted per project
- Website Care plan: $150 per month
- Website Care Plus plan: $300 per month
- Website Care Pro plan (managed hosting plus a monthly SEO cycle): $600 per month
- Managed hosting add-on for Care and Care Plus: $50 per month
- Additional plan edits: $150 per hour, quoted before work begins

## Contact

- Inquiry form: https://www.localsignalwebsites.studio/contact
- Email: chad@lswdesigns.info

This file is a concise machine-readable guide. The canonical HTML pages above are the source of truth.
`;

export function GET() {
  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
