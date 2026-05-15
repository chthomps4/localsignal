const SITE_URL = "https://localsignalwebsites.studio";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export const siteConfig = {
  name: "Local Signal Websites",
  description:
    "Custom websites for artists, creators, and small businesses. Clean design, fast performance, built to grow with you.",
  url: SITE_URL,
};
