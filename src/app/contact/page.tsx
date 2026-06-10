import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, breadcrumbSchema, localBusinessSchema } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a Local Signal Websites review. Tell us where your site is now and what needs to happen next.",
  alternates: { canonical: absoluteUrl("/contact") },
  openGraph: {
    title: "Contact | Local Signal Websites",
    description: "Start a Local Signal Websites review and get a practical next step.",
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
    description: "Start a Local Signal Websites review and get a practical next step.",
    images: [absoluteUrl("/images/og-image.jpg")],
  },
};

const contactJsonLd = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  localBusinessSchema(),
];

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
            Start your website review.
          </h1>
          <p className="mt-6 text-white/45 text-lg leading-relaxed max-w-2xl">
            Tell us where your website is now, what is not working, and what
            you need it to do next. We&apos;ll reply with practical feedback, a
            clear next step, and no pressure to start before the scope makes
            sense.
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
                      title: "We review the site path",
                      description:
                        "A real person reviews the site, offer, and next-step context you send.",
                    },
                    {
                      step: "2",
                      title: "We reply within 24 hours",
                      description:
                        "You get honest feedback, initial ideas, and a rough scope estimate.",
                    },
                    {
                      step: "3",
                      title: "We schedule a call if useful",
                      description:
                        "If the project needs more context, we use a short call to confirm details.",
                    },
                    {
                      step: "4",
                      title: "You choose the next step",
                      description:
                        "Scope, price, timeline, and deliverables are clear before any work starts.",
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
                <h3 className="font-bold mb-4">Contact path</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/25 text-xs font-medium uppercase tracking-wider mb-1">
                      Preferred
                    </p>
                    <p className="text-white/50 text-sm">
                      Use the project form so the review starts with the right site, goal, and context.
                    </p>
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

      <JsonLd data={contactJsonLd} />
    </>
  );
}
