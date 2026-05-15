"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "Starter Site ($800+)",
  "Business Site ($2,000+)",
  "Custom Build",
  "Not sure yet",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // For now, show a confirmation message.
    // In production, wire this to a form service (Formspree, Resend, etc.)
    setSubmitted(true);
  }

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
      <section className="pb-28 md:pb-36">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl bg-signal-500/[0.06] border border-signal-500/20 p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-signal-500/15 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-signal-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">Message received.</h2>
                  <p className="text-white/50 max-w-md mx-auto">
                    Thanks for reaching out. We&apos;ll review your project
                    details and get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/60 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/60 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-white/60 mb-2"
                    >
                      Business / Project Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all"
                      placeholder="Your business or project name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-white/60 mb-2"
                    >
                      What are you looking for?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-navy-900 text-white/50">
                        Select a service
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-white/60 mb-2"
                    >
                      Current website (if any)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all"
                      placeholder="https://"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/60 mb-2"
                    >
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-signal-500/40 focus:border-signal-500/30 transition-all resize-none"
                      placeholder="What do you need? What's your timeline? Any inspiration or references?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-signal-500 text-white font-semibold hover:bg-signal-400 transition-all duration-300 hover:shadow-lg hover:shadow-signal-500/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
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
    </>
  );
}
