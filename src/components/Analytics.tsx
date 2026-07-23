"use client";

import { useEffect } from "react";
import { readAttribution, track } from "@/lib/attribution";

const PRODUCTION_HOSTS = [
  "localsignalwebsites.studio",
  "www.localsignalwebsites.studio",
];

export default function Analytics() {
  useEffect(() => {
    window.va =
      window.va ||
      function analyticsQueue(...params: unknown[]) {
        window.vaq = window.vaq || [];
        window.vaq.push(params);
      };

    if (
      PRODUCTION_HOSTS.includes(window.location.hostname) &&
      !document.querySelector('script[src="/_vercel/insights/script.js"]')
    ) {
      const script = document.createElement("script");
      script.src = "/_vercel/insights/script.js";
      script.defer = true;
      script.dataset.sdkn = "local-signal-site";
      script.dataset.sdkv = "1";
      document.head.appendChild(script);
    }

    readAttribution();

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="/contact"]'
      );
      if (!link) return;
      track("Contact CTA", { path: window.location.pathname });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
