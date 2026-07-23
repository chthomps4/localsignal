// Privacy-clean campaign attribution, mirrored from signalworkshop.studio.
// Values live in sessionStorage only and are sent nowhere except with an
// inquiry the visitor chooses to submit.

const STORAGE_KEY = "local-signal-attribution";

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type Attribution = Record<string, string>;

function cleanPath(value: string): string {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.origin);
    return `${url.origin}${url.pathname}`.slice(0, 255);
  } catch {
    return String(value).slice(0, 255);
  }
}

function cleanReferrer(value: string): string {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.origin);
    return url.origin === window.location.origin
      ? `${url.origin}${url.pathname}`.slice(0, 255)
      : url.origin.slice(0, 255);
  } catch {
    return "";
  }
}

export function readAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  let stored: Attribution = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    stored = {};
  }

  const params = new URLSearchParams(window.location.search);
  const attribution: Attribution = {
    ...stored,
    landing_page: stored.landing_page || cleanPath(window.location.href),
    source_referrer: stored.source_referrer || cleanReferrer(document.referrer),
  };

  ATTRIBUTION_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) attribution[key] = value.slice(0, 255);
  });

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // The inquiry still works when browser storage is unavailable.
  }

  return attribution;
}

export function inquiryPage(): string {
  if (typeof window === "undefined") return "";
  return cleanPath(window.location.href);
}

type VaQueue = (...params: unknown[]) => void;

declare global {
  interface Window {
    va?: VaQueue;
    vaq?: unknown[][];
  }
}

export function track(name: string, data?: Record<string, string>): void {
  if (typeof window === "undefined") return;
  window.va?.("event", data ? { name, data } : { name });
}
