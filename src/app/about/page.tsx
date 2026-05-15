import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Local Signal Websites is a web design studio in North Carolina building custom sites for artists, creators, and small businesses.",
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: {
    title: "About | Local Signal Websites",
    description:
      "A web design studio in North Carolina building custom sites for artists, creators, and small businesses.",
    url: absoluteUrl("/about"),
    siteName: "Local Signal Websites",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Local Signal Websites — About",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Local Signal Websites",
    description: "A web design studio in North Carolina building custom sites for artists, creators, and small businesses.",
    images: [absoluteUrl("/images/og-image.jpg")],
  },
};

const values = [
  {
    title: "Craft over speed",
    description:
      "We'd rather take an extra day to get it right than ship something we're not proud of. Every site we build reflects on both of us.",
  },
  {
    title: "Transparency by default",
    description:
      "Clear pricing, honest timelines, no surprises. If something changes, you'll know before we do.",
  },
  {
    title: "Ownership matters",
    description:
      "You own your code, your domain, and your data. We build on open platforms — no lock-in, no hostage situations.",
  },
  {
    title: "Small is powerful",
    description:
      "We're a focused studio, not an agency. That means you work directly with the people building your site — no account managers, no telephone game.",
  },
];

const techStack = [
  {
    category: "Frontend",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Hosting",
    tools: ["Vercel", "Netlify", "Cloudflare"],
  },
  {
    category: "CMS",
    tools: ["Sanity", "Contentful", "MDX"],
  },
  {
    category: "Tools",
    tools: ["GitHub", "Figma", "VS Code", "AI-augmented workflows"],
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_var(--color-signal-900)/20,_transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-4">
            About
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            We build websites that people remember.
          </h1>
          <p className="mt-6 text-white/45 text-lg leading-relaxed max-w-2xl">
            Local Signal Websites is a web design and development studio
            based in the mountains of North Carolina. We build custom
            websites for artists, creators, and small businesses who
            care about how they show up online.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
                The short version
              </h2>
              <div className="space-y-5 text-white/50 leading-relaxed">
                <p>
                  Local Signal started because we kept seeing the same problem:
                  talented people and solid businesses stuck behind bad websites.
                  Slow-loading template sites. Wix pages that looked like
                  everyone else&apos;s. Agencies charging $10K for something
                  worth $2K.
                </p>
                <p>
                  We thought: what if you could get a website that was custom-designed,
                  blazing fast, SEO-ready, and built with real code — without
                  the agency price tag or the DIY headache?
                </p>
                <p>
                  That&apos;s what we do. We use modern tools and AI-augmented
                  workflows to work faster without cutting corners. You get a
                  site that looks and performs like it cost three times what you
                  paid. And you own all of it — the code, the design, the domain.
                  No lock-in. No monthly ransom.
                </p>
                <p>
                  We&apos;re not trying to be the biggest studio. We&apos;re
                  trying to be the one you actually want to work with.
                </p>
              </div>
            </div>

            {/* Visual element */}
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8 md:p-10">
              <div className="space-y-8">
                <div>
                  <p className="text-white/20 text-xs font-medium uppercase tracking-wider mb-2">
                    Location
                  </p>
                  <p className="text-white/70 font-medium">
                    Western North Carolina
                  </p>
                </div>
                <div>
                  <p className="text-white/20 text-xs font-medium uppercase tracking-wider mb-2">
                    Focus
                  </p>
                  <p className="text-white/70 font-medium">
                    Artists, creators & small businesses
                  </p>
                </div>
                <div>
                  <p className="text-white/20 text-xs font-medium uppercase tracking-wider mb-2">
                    Approach
                  </p>
                  <p className="text-white/70 font-medium">
                    Custom code, modern tools, AI-augmented
                  </p>
                </div>
                <div>
                  <p className="text-white/20 text-xs font-medium uppercase tracking-wider mb-2">
                    Philosophy
                  </p>
                  <p className="text-white/70 font-medium">
                    You own everything. No lock-in. Ever.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What we believe in
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl bg-white/[0.015] border border-white/[0.04]"
              >
                <h3 className="font-bold mb-2">{v.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Our Tools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Modern stack, proven results
            </h2>
            <p className="mt-4 text-white/45 text-lg max-w-xl mx-auto">
              We use the same technologies that power sites for Netflix,
              Hulu, Nike, and the Washington Post.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {techStack.map((group) => (
              <div key={group.category}>
                <p className="text-white/20 text-xs font-semibold uppercase tracking-wider mb-3">
                  {group.category}
                </p>
                <ul className="space-y-2">
                  {group.tools.map((tool) => (
                    <li key={tool} className="text-white/55 text-sm">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-signal-950/15 to-transparent" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let&apos;s work together.
          </h2>
          <p className="mt-4 text-white/45 text-lg">
            Whether you need a simple site or something ambitious,
            we&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 rounded-xl bg-signal-500 text-white font-semibold hover:bg-signal-400 transition-all duration-300 hover:shadow-xl hover:shadow-signal-500/20"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
