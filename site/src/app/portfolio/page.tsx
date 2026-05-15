import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Websites we've built for artists, creators, and small businesses. See our work and what we can do for you.",
  alternates: { canonical: absoluteUrl("/portfolio") },
  openGraph: {
    title: "Portfolio | Local Signal Websites",
    description: "Websites we've built for artists, creators, and small businesses.",
    url: absoluteUrl("/portfolio"),
    siteName: "Local Signal Websites",
    type: "website",
  },
};

const projects = [
  {
    title: "Parallax Hearts",
    url: "https://parallaxhearts.org",
    category: "Music · Story World · E-Commerce",
    description:
      "A full cinematic web experience for an independent music and graphic novel project. 20+ pages connecting an album, a story world set in the fictional town of Vallen, a graphic novel, a support shop, and a PHYLAX sub-world — all with sub-second load times and full SEO.",
    challenge:
      "The client needed a site that felt like entering a world, not just browsing a band page. Music, story, visuals, and commerce had to feel like one cohesive experience.",
    result:
      "12ms TTFB, 20+ pages, perfect SEO scores, and a visitor path that pulls people from the music into the story and from the story into the shop.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel Pro"],
    stats: [
      { label: "TTFB", value: "12ms" },
      { label: "Pages", value: "20+" },
      { label: "FCP", value: "0.7s" },
    ],
  },
];

const comingSoon = [
  {
    title: "Your Project",
    description: "We're building our portfolio one great project at a time. Yours could be next.",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_var(--color-signal-900)/20,_transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Work that speaks for itself.
          </h1>
          <p className="mt-6 text-white/45 text-lg leading-relaxed max-w-2xl">
            Every project is custom. Every pixel is intentional. Here&apos;s
            what we&apos;ve built — and what we can build for you.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto px-6">
          {projects.map((project) => (
            <div key={project.title} className="mb-12">
              {/* Main showcase */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-signal-500/25 transition-all duration-500"
              >
                {/* Browser chrome */}
                <div className="bg-white/[0.03] border-b border-white/[0.05] px-5 py-3 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                    <div className="w-3 h-3 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/[0.04] rounded-md px-4 py-1.5 text-white/25 text-xs font-mono max-w-sm">
                      {project.url.replace("https://", "")}
                    </div>
                  </div>
                </div>

                {/* Preview */}
                <div className="h-72 sm:h-96 bg-gradient-to-br from-[#0f1a2e] via-[#1a1a2e] to-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(30,40,80,0.5),_transparent_70%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(20,30,60,0.3),_transparent_50%)]" />
                  <div className="relative text-center">
                    <div className="text-8xl font-bold bg-gradient-to-r from-white/15 to-white/5 bg-clip-text text-transparent group-hover:from-white/25 group-hover:to-white/8 transition-all duration-700">
                      PH
                    </div>
                    <p className="text-white/15 text-sm mt-4 font-medium group-hover:text-white/25 transition-colors duration-500">
                      {project.url.replace("https://", "")}
                    </p>
                  </div>
                </div>
              </a>

              {/* Details grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Left: main info */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-signal-500/10 text-signal-400 text-[11px] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-3xl font-bold">{project.title}</h2>
                  <p className="text-white/30 text-xs font-medium uppercase tracking-wider mt-1">
                    {project.category}
                  </p>
                  <p className="text-white/50 leading-relaxed mt-5">
                    {project.description}
                  </p>

                  {/* Challenge / Result */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-2">
                        The Challenge
                      </p>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                    <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                      <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-2">
                        The Result
                      </p>
                      <p className="text-white/45 text-sm leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: stats */}
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-5">
                      Performance
                    </p>
                    <div className="space-y-5">
                      {project.stats.map((stat) => (
                        <div key={stat.label}>
                          <div className="text-2xl font-bold text-signal-400">
                            {stat.value}
                          </div>
                          <div className="text-white/30 text-xs mt-0.5">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3.5 rounded-xl bg-signal-500 text-white text-sm font-semibold hover:bg-signal-400 transition-all duration-300 hover:shadow-lg hover:shadow-signal-500/20"
                  >
                    Visit Live Site →
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon */}
          <div className="mt-16">
            <h3 className="text-white/25 text-xs font-semibold uppercase tracking-wider mb-6">
              More coming soon
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {comingSoon.map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl border border-dashed border-white/[0.06] flex flex-col items-center justify-center text-center min-h-[200px]"
                >
                  <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-white/20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-white/50">{item.title}</h3>
                  <p className="text-white/30 text-sm mt-2 max-w-[200px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-transparent" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Want to be on this page?
          </h2>
          <p className="mt-4 text-white/45 text-lg">
            Let&apos;s build something you&apos;re proud to show off.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 rounded-xl bg-signal-500 text-white font-semibold hover:bg-signal-400 transition-all duration-300 hover:shadow-xl hover:shadow-signal-500/20"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
