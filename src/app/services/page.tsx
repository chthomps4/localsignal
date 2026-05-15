import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design and development for artists, creators, and small businesses. Starter sites, business sites, and full custom builds.",
  alternates: { canonical: absoluteUrl("/services") },
  openGraph: {
    title: "Services | Local Signal Websites",
    description:
      "Custom website design and development for artists, creators, and small businesses.",
    url: absoluteUrl("/services"),
    siteName: "Local Signal Websites",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Local Signal Websites — Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Local Signal Websites",
    description: "Custom website design and development for artists, creators, and small businesses.",
    images: [absoluteUrl("/images/og-image.jpg")],
  },
};

const tiers = [
  {
    name: "Starter Site",
    price: "$800",
    tagline: "Get online fast — and look great doing it.",
    description:
      "A clean, responsive one-page website designed to make an immediate impression. We design it, build it, and deploy it — you just point your domain.",
    ideal: "Freelancers, side projects, new businesses, personal brands",
    timeline: "1–2 weeks",
    includes: [
      "Custom one-page design",
      "Mobile-responsive layout",
      "Contact form (email or form service)",
      "Basic SEO setup (title, meta, OG tags)",
      "Hosting configuration (Vercel/Netlify)",
      "SSL certificate",
      "1 round of revisions",
      "Source code handoff",
    ],
  },
  {
    name: "Business Site",
    price: "$2,000",
    tagline: "The foundation of a serious online presence.",
    description:
      "A multi-page website that communicates your brand, tells your story, and gives visitors a clear path to become customers. This is where most of our clients start.",
    ideal: "Small businesses, creative studios, local services, growing brands",
    timeline: "3–4 weeks",
    featured: true,
    includes: [
      "Up to 7 custom-designed pages",
      "Brand-driven design system",
      "Content strategy session",
      "Advanced SEO (structured data, sitemap, robots.txt)",
      "Google Analytics / Search Console setup",
      "Blog or news section",
      "Contact & intake forms",
      "Social media integration",
      "Performance optimization",
      "2 rounds of revisions",
      "Full source code ownership",
    ],
  },
  {
    name: "Custom Build",
    price: "Custom",
    tagline: "For projects that don't fit a box.",
    description:
      "Full-scope design and development for anything that needs custom logic, integrations, or scale. E-commerce, web apps, membership sites, dashboards, interactive experiences — you name it.",
    ideal: "Established businesses, SaaS products, e-commerce, complex projects",
    timeline: "4–8+ weeks",
    includes: [
      "Unlimited pages & scope",
      "Custom application logic",
      "Database & authentication",
      "Third-party API integrations",
      "Payment processing",
      "CMS or admin dashboard",
      "Performance & accessibility audit",
      "Ongoing support & maintenance plans",
      "Dedicated project communication",
      "Full source code & documentation",
    ],
  },
];

const addOns = [
  { name: "Logo & Brand Identity", price: "from $300", description: "Logo, color palette, typography, and brand guidelines." },
  { name: "Copywriting", price: "from $200", description: "Professionally written website copy — clear, compelling, and SEO-friendly." },
  { name: "Monthly Maintenance", price: "$100/mo", description: "Updates, backups, uptime monitoring, and priority support." },
  { name: "SEO Audit & Strategy", price: "$250", description: "Full technical SEO audit with an actionable improvement plan." },
  { name: "Social Media Setup", price: "$150", description: "Branded profiles, cover images, bio copy, and linking across platforms." },
  { name: "Content Photography", price: "varies", description: "Product, headshot, or environmental photography for your site." },
];

const faqs = [
  {
    q: "How long does a project take?",
    a: "Starter Sites take 1–2 weeks. Business Sites take 3–4 weeks. Custom Builds depend on scope, but we'll give you a clear timeline before starting.",
  },
  {
    q: "What do I need to provide?",
    a: "At minimum: your business name, what you do, and who you serve. We'll guide you through everything else. If you have a logo, brand colors, or existing content, great — but it's not required.",
  },
  {
    q: "Do I own the website?",
    a: "Yes. 100%. You own the code, the design, the domain, and all the content. There's no lock-in and no platform dependency.",
  },
  {
    q: "What's the tech stack?",
    a: "We primarily build with Next.js, React, TypeScript, and Tailwind CSS — deployed on Vercel or Netlify. This gives you a fast, modern, maintainable site that's easy to scale.",
  },
  {
    q: "Do you offer hosting?",
    a: "We set up your hosting on platforms like Vercel (free tier is usually enough for most sites). You won't need a separate hosting bill unless your traffic is massive.",
  },
  {
    q: "Can I update the site myself?",
    a: "Depending on the project, we can integrate a CMS (like Sanity or Contentful) so you can edit content without touching code. Otherwise, we offer maintenance plans for updates.",
  },
  {
    q: "What if I need changes after launch?",
    a: "Small tweaks within the first 30 days are on us. After that, we offer hourly rates or a monthly maintenance plan for ongoing changes.",
  },
];

/* JSON-LD for FAQ page */
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_var(--color-signal-900)/20,_transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Services
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            What we build — and what it costs.
          </h1>
          <p className="mt-6 text-white/45 text-lg leading-relaxed max-w-2xl">
            Transparent pricing, no hidden fees. Every project gets the same
            craft and attention — the only variable is scope.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 md:p-10 border flex flex-col ${
                  tier.featured
                    ? "bg-gradient-to-b from-signal-500/[0.07] to-transparent border-signal-500/20 shadow-xl shadow-signal-500/[0.04] ring-1 ring-signal-500/10"
                    : "bg-white/[0.015] border-white/[0.05]"
                }`}
              >
                {tier.featured && (
                  <div className="inline-flex self-start px-3 py-1 rounded-full bg-signal-500 text-white text-[11px] font-semibold tracking-wide uppercase mb-6">
                    Recommended
                  </div>
                )}
                <h2 className="text-2xl font-bold">{tier.name}</h2>
                <div className="flex items-baseline gap-1 mt-2 mb-4">
                  <span className="text-3xl font-bold text-signal-400">{tier.price}</span>
                  {tier.price !== "Custom" && (
                    <span className="text-white/30 text-sm">starting</span>
                  )}
                </div>
                <p className="text-signal-300/70 text-sm font-medium mb-2">{tier.tagline}</p>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{tier.description}</p>

                <div className="mb-6 pb-6 border-b border-white/[0.05]">
                  <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-1">
                    Ideal for
                  </p>
                  <p className="text-white/50 text-sm">{tier.ideal}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/[0.05]">
                  <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-1">
                    Timeline
                  </p>
                  <p className="text-white/50 text-sm">{tier.timeline}</p>
                </div>

                <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-3">
                  Includes
                </p>
                <ul className="space-y-2.5 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-white/50">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          tier.featured ? "text-signal-400" : "text-white/20"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block mt-8 text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    tier.featured
                      ? "bg-signal-500 text-white hover:bg-signal-400 hover:shadow-lg hover:shadow-signal-500/20"
                      : "bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white border border-white/[0.06]"
                  }`}
                >
                  {tier.price === "Custom" ? "Let's Talk" : "Get Started"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Add-Ons
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Need more? We&apos;ve got you.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.name}
                className="p-6 rounded-xl bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-sm">{addon.name}</h3>
                  <span className="text-signal-400 text-xs font-semibold whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
                <p className="text-white/35 text-sm leading-relaxed">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — interactive accordion */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Common questions
            </h2>
          </div>

          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-signal-950/15 to-transparent" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Not sure which tier fits?
          </h2>
          <p className="mt-4 text-white/45 text-lg">
            Just tell us what you need. We&apos;ll recommend the right
            approach and quote it clearly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 rounded-xl bg-signal-500 text-white font-semibold hover:bg-signal-400 transition-all duration-300 hover:shadow-xl hover:shadow-signal-500/20"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
