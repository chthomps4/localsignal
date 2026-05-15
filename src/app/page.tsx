import Link from "next/link";

/* ─── Data ────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Starter Site",
    price: "from $800",
    description:
      "A sharp, single-page site that loads fast and looks like it costs ten times more. Perfect for freelancers, solo creators, and new businesses who need to be online yesterday.",
    features: [
      "One-page responsive design",
      "Mobile-first build",
      "Contact form integration",
      "SEO fundamentals",
      "Vercel or Netlify hosting setup",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: "Business Site",
    price: "from $2,000",
    description:
      "A full multi-page website that tells your story, showcases your work, and turns visitors into paying customers. This is the foundation of a real digital presence.",
    features: [
      "Up to 7 custom pages",
      "Brand-driven design system",
      "Advanced SEO & metadata",
      "Analytics integration",
      "Content strategy session",
      "Blog or news section",
    ],
    featured: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom Build",
    price: "let's talk",
    description:
      "For projects that don't fit a template. E-commerce, web apps, interactive experiences, membership portals — if you can dream it, we can engineer it.",
    features: [
      "Unlimited scope & pages",
      "Custom functionality",
      "Database & auth systems",
      "Third-party integrations",
      "Ongoing support plans",
      "Performance optimization",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, your audience, and your goals. No questionnaire — a real conversation about what success looks like for you.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create a custom design rooted in your brand. You see it, you shape it, we refine it until it feels exactly right.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "We code your site with modern tools that make it fast, accessible, and ready to grow. Every line of code is yours.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We handle deployment, DNS, SSL, analytics, and SEO setup. You go live with confidence — and we're still here if you need us.",
  },
];

const reasons = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Blazing fast",
    description: "Sub-second load times. We use the same frameworks that power Netflix, Hulu, and Nike.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Designed, not templated",
    description: "No drag-and-drop themes. Every pixel is intentional, crafted for your specific brand and audience.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "SEO from the ground up",
    description: "Structured data, fast core web vitals, semantic HTML, proper metadata — the stuff that actually moves the needle.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "You own everything",
    description: "Your code, your domain, your data. No lock-in. No monthly ransom. Walk away anytime with everything you paid for.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: "Mobile-first, always",
    description: "Over 60% of web traffic is mobile. We design for phones first, then scale up beautifully for larger screens.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "AI-augmented workflow",
    description: "We use AI tools to move faster without cutting corners — better copy, smarter SEO, faster iterations, lower cost to you.",
  },
];

/* ─── Page ────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Layered background */}
        <div className="absolute inset-0 bg-navy-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,_var(--color-signal-900)/30,_transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_50%,_var(--color-signal-950)/20,_transparent)]" />

        {/* Animated grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Signal pulse rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.04]">
          <div className="absolute inset-0 rounded-full border border-signal-400 animate-[ping_4s_ease-out_infinite]" />
          <div className="absolute inset-[15%] rounded-full border border-signal-400 animate-[ping_4s_ease-out_1s_infinite]" />
          <div className="absolute inset-[30%] rounded-full border border-signal-400 animate-[ping_4s_ease-out_2s_infinite]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] mb-10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/50 text-xs font-medium tracking-wide">
              Now accepting projects for Summer 2026
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04]">
            <span className="block">Websites that</span>
            <span className="block mt-1 bg-gradient-to-r from-signal-300 via-signal-400 to-signal-500 bg-clip-text text-transparent">
              work as hard
            </span>
            <span className="block mt-1">as you do.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/50 leading-relaxed max-w-2xl">
            Custom-built websites for artists, creators, and small businesses
            who refuse to look generic. Clean code, fast performance, and
            design that actually converts.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-signal-500 text-white font-semibold text-lg hover:bg-signal-400 transition-all duration-300 hover:shadow-xl hover:shadow-signal-500/20 hover:-translate-y-0.5"
            >
              Start Your Project
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white/[0.04] text-white/70 font-semibold text-lg hover:bg-white/[0.08] hover:text-white transition-all duration-300 border border-white/[0.06] hover:border-white/[0.12]"
            >
              See Our Work
            </Link>
          </div>

          {/* Tech strip */}
          <div className="mt-24 pt-8 border-t border-white/[0.04]">
            <p className="text-white/20 text-xs font-medium tracking-wider uppercase mb-5">
              Built with
            </p>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.05] text-white/30 text-xs font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ────────────────────────────────────────────────── */}
      <section id="services" className="py-28 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Three tiers.
              <br />
              One standard of quality.
            </h2>
            <p className="mt-5 text-white/45 text-lg leading-relaxed">
              Pick the starting point that fits your project. Every tier
              gets the same attention to craft — the only difference is scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative rounded-2xl p-8 md:p-9 border transition-all duration-300 hover:-translate-y-1 ${
                  service.featured
                    ? "bg-gradient-to-b from-signal-500/[0.08] to-transparent border-signal-500/20 hover:border-signal-400/30 shadow-lg shadow-signal-500/[0.03]"
                    : "bg-white/[0.015] border-white/[0.05] hover:border-white/[0.12] hover:bg-white/[0.025]"
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-signal-500 text-white text-[11px] font-semibold tracking-wide uppercase">
                    Most Popular
                  </div>
                )}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${
                    service.featured
                      ? "bg-signal-500/15 text-signal-400"
                      : "bg-white/[0.05] text-white/50"
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-signal-400 text-sm font-semibold mt-1 mb-4">
                  {service.price}
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-7">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/55">
                      <svg
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          service.featured ? "text-signal-400" : "text-white/25"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block mt-8 text-center py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    service.featured
                      ? "bg-signal-500 text-white hover:bg-signal-400 hover:shadow-lg hover:shadow-signal-500/20"
                      : "bg-white/[0.05] text-white/60 hover:bg-white/[0.1] hover:text-white border border-white/[0.06]"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why us ──────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Why Local Signal
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              Your website should be your best employee.
            </h2>
            <p className="mt-5 text-white/45 text-lg max-w-xl mx-auto">
              We build sites that work around the clock — attracting visitors,
              building trust, and converting them into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group p-7 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:border-signal-500/20 transition-all duration-300 hover:bg-white/[0.025]"
              >
                <div className="w-9 h-9 rounded-lg bg-signal-500/10 text-signal-400 flex items-center justify-center mb-5 group-hover:bg-signal-500/15 transition-colors">
                  {r.icon}
                </div>
                <h3 className="font-bold mb-2">{r.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ─────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              From idea to live site.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}
                <div className="relative z-10">
                  <div className="text-signal-500/40 text-5xl font-black mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Work ───────────────────────────────────────────── */}
      <section className="py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              See what we build.
            </h2>
          </div>

          {/* Parallax Hearts showcase */}
          <a
            href="https://parallaxhearts.org"
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05] hover:border-signal-500/25 transition-all duration-500 hover:shadow-2xl hover:shadow-signal-500/[0.05]"
          >
            {/* Browser chrome mockup */}
            <div className="bg-white/[0.03] border-b border-white/[0.05] px-5 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/[0.04] rounded-md px-4 py-1.5 text-white/25 text-xs font-mono max-w-sm">
                  parallaxhearts.org
                </div>
              </div>
            </div>

            {/* Site preview */}
            <div className="h-64 sm:h-80 bg-gradient-to-br from-[#0f1a2e] via-[#1a1a2e] to-[#0a0a1a] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(30,40,80,0.4),_transparent_70%)]" />
              <div className="relative text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-white/20 to-white/5 bg-clip-text text-transparent group-hover:from-white/30 group-hover:to-white/10 transition-all duration-500">
                  PH
                </div>
                <div className="text-white/15 text-sm mt-3 font-medium group-hover:text-white/25 transition-colors">
                  parallaxhearts.org
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-signal-500/10 text-signal-400 text-[11px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold group-hover:text-signal-300 transition-colors">
                Parallax Hearts
              </h3>
              <p className="text-white/30 text-xs font-medium uppercase tracking-wider mt-1">
                Music · Story World · Graphic Novel · E-Commerce
              </p>
              <p className="text-white/45 leading-relaxed mt-4">
                A cinematic website that connects an album, a graphic novel, and
                an immersive story world into one unified experience. 20+ pages,
                full SEO, lightning-fast performance, and a design that pulls you in.
              </p>
              <div className="mt-6 flex items-center gap-6 text-sm">
                <div>
                  <span className="text-signal-400 font-bold">12ms</span>
                  <span className="text-white/30 ml-1.5">TTFB</span>
                </div>
                <div>
                  <span className="text-signal-400 font-bold">20+</span>
                  <span className="text-white/30 ml-1.5">Pages</span>
                </div>
                <div>
                  <span className="text-signal-400 font-bold">100</span>
                  <span className="text-white/30 ml-1.5">SEO Score</span>
                </div>
              </div>
            </div>
          </a>

          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="text-signal-400 hover:text-signal-300 text-sm font-medium transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-signal-950/20 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-signal-500/10 border border-signal-500/20 flex items-center justify-center mx-auto mb-8">
            <svg className="w-7 h-7 text-signal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Ready to send a signal?
          </h2>
          <p className="mt-5 text-white/45 text-lg leading-relaxed max-w-lg mx-auto">
            Tell us about your project. We&apos;ll reply within 24 hours
            with a plan and a clear price — no surprises, no pressure.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 mt-10 px-10 py-4 rounded-xl bg-signal-500 text-white font-semibold text-lg hover:bg-signal-400 transition-all duration-300 hover:shadow-xl hover:shadow-signal-500/20 hover:-translate-y-0.5"
          >
            Start Your Project
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
