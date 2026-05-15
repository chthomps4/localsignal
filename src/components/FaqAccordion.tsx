"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className={`rounded-xl border transition-colors ${
              isOpen
                ? "bg-white/[0.03] border-signal-500/15"
                : "bg-white/[0.01] border-white/[0.05] hover:border-white/[0.08]"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <h3 className="font-semibold text-sm sm:text-base">{faq.q}</h3>
              <svg
                className={`w-5 h-5 shrink-0 text-white/30 transition-transform duration-300 ${
                  isOpen ? "rotate-180 text-signal-400" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-6 pb-5 text-white/40 text-sm leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
