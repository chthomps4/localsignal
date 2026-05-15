import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Local Signal Websites. Tell us about your project and we'll reply within 24 hours.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact | Local Signal Websites",
    description: "Get in touch with Local Signal Websites. Tell us about your project.",
    url: absoluteUrl("/contact"),
    siteName: "Local Signal Websites",
    type: "website",
    images: [
      {
        url: absoluteUrl("/images/og-image.jpg"),
        width: 1200,
        height: 630,
        alt: "Local Signal Websites — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Local Signal Websites",
    description: "Get in touch with Local Signal Websites. Tell us about your project.",
    images: [absoluteUrl("/images/og-image.jpg")],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Local Signal Websites",
  url: "https://www.localsignalwebsites.studio",
  description:
    "Custom website design and development for artists, creators, and small businesses.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "NC",
    addressCountry: "US",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576498498498",
    "https://www.instagram.com/localsignalwebsites",
  ],
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_var(--color-signal-900)/20,_transparent)]" />
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-signal-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
            Let&apos;s build something great.
          </h1>
          <p className="mt-6 text-white/45 text-lg leading-relaxed max-w-2xl">
            Tell us about your project. We&apos;ll reply within 24 hours
            with honest feedback and a clear next step — no sales pitch,
            no pressure.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8">
                <h3 className="font-bold mb-6">What happens next?</h3>
                <div className="space-y-5">
                  {[
                    {
                      step: "1",
                      title: "We read your message",
                      description:
                        "No auto-reply bots. A real person reviews your project details.",
                    },
                    {
                      step: "2",
                      title: "We reply within 24 hours",
                      description:
                        "With honest feedback, initial ideas, and a rough scope estimate.",
                    },
                    {
                      step: "3",
                      title: "We schedule a call (optional)",
                      description:
                        "If it makes sense, we'll hop on a quick call to nail down details.",
                    },
                    {
                      step: "4",
                      title: "You get a clear proposal",
                      description:
                        "Exact scope, price, timeline, and deliverables — before any work starts.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-7 h-7 rounded-lg bg-signal-500/10 text-signal-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-white/35 text-sm mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8">
                <h3 className="font-bold mb-4">Other ways to reach us</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:chad@parallaxhearts.org"
                      className="text-signal-400 hover:text-signal-300 text-sm transition-colors"
                    >
                      chad@parallaxhearts.org
                    </a>
                  </div>
                  <div>
                    <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-1">
                      Social
                    </p>
                    <div className="flex gap-4">
                      <a
                        href="https://www.facebook.com/profile.php?id=61576498498498"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-signal-400 hover:text-signal-300 text-sm transition-colors"
                      >
                        Facebook
                      </a>
                      <a
                        href="https://www.instagram.com/localsignalwebsites"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-signal-400 hover:text-signal-300 text-sm transition-colors"
                      >
                        Instagram
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-white/50 text-sm">
                      Western North Carolina
                    </p>
                    <p className="text-white/30 text-xs mt-1">
                      Serving clients everywhere — remotely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}
