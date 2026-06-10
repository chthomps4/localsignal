const SITE_URL = "https://www.localsignalwebsites.studio";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export const siteConfig = {
  name: "Local Signal Websites",
  description:
    "Custom websites for artists, creators, and small businesses. Clean design, fast performance, built to grow with you.",
  url: SITE_URL,
  logo: absoluteUrl("/images/logo.png"),
  sameAs: [
    "https://www.facebook.com/profile.php?id=61576498498498",
    "https://www.instagram.com/localsignalwebsites",
  ],
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    areaServed: "US",
    sameAs: siteConfig.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
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
    sameAs: siteConfig.sameAs,
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom website design and development",
    url: absoluteUrl("/services"),
    description:
      "Custom website design and development for artists, creators, and small businesses.",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: [
      "Starter website",
      "Business website",
      "Custom web application",
      "Website maintenance",
      "SEO audit and strategy",
    ],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
