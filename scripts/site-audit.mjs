// Dependency-free SEO/metadata contract audit.
// Usage:
//   node scripts/site-audit.mjs                       # audits http://127.0.0.1:3000
//   SITE_URL=https://www.localsignalwebsites.studio LIVE=1 node scripts/site-audit.mjs

const BASE = (process.env.SITE_URL || "http://127.0.0.1:3000").replace(/\/$/, "");
const LIVE = process.env.LIVE === "1";
const CANONICAL_ORIGIN = "https://www.localsignalwebsites.studio";

const PAGES = [
  { path: "/", canonical: `${CANONICAL_ORIGIN}/` },
  { path: "/services", canonical: `${CANONICAL_ORIGIN}/services` },
  { path: "/portfolio", canonical: `${CANONICAL_ORIGIN}/portfolio` },
  { path: "/about", canonical: `${CANONICAL_ORIGIN}/about` },
  { path: "/contact", canonical: `${CANONICAL_ORIGIN}/contact` },
];

const failures = [];
const check = (ok, message) => {
  if (!ok) failures.push(message);
};

const get = async (url, opts = {}) => {
  const res = await fetch(url, {
    redirect: opts.redirect || "follow",
    headers: { "user-agent": "LocalSignalSiteAudit/1.0" },
    signal: AbortSignal.timeout(20_000),
  });
  return res;
};

const attr = (html, pattern) => {
  const match = html.match(pattern);
  return match ? match[1].trim() : "";
};

const titles = new Map();
const descriptions = new Map();

for (const page of PAGES) {
  const url = `${BASE}${page.path}`;
  let res;
  try {
    res = await get(url);
  } catch (error) {
    check(false, `${page.path}: fetch failed (${error.message})`);
    continue;
  }

  check(res.status === 200, `${page.path}: status ${res.status}`);
  const html = await res.text();

  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  check(h1Count === 1, `${page.path}: expected one h1, found ${h1Count}`);

  const title = attr(html, /<title>([^<]*)<\/title>/);
  check(title.length > 0, `${page.path}: title missing`);
  check(!titles.has(title), `${page.path}: duplicate title "${title}"`);
  titles.set(title, page.path);

  const description = attr(html, /<meta name="description" content="([^"]*)"/);
  check(description.length > 0, `${page.path}: meta description missing`);
  check(!descriptions.has(description), `${page.path}: duplicate description`);
  descriptions.set(description, page.path);

  const canonical = attr(html, /<link rel="canonical" href="([^"]*)"/);
  // The root canonical may render with or without the trailing slash; both
  // resolve to the same URL.
  const canonicalOk =
    canonical === page.canonical ||
    (page.path === "/" && canonical === CANONICAL_ORIGIN);
  check(canonicalOk, `${page.path}: canonical "${canonical}" != "${page.canonical}"`);

  const ogImage = attr(html, /<meta property="og:image" content="([^"]*)"/);
  check(ogImage.startsWith(CANONICAL_ORIGIN), `${page.path}: og:image missing or not first-party`);

  const jsonLdBlocks = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g) || [];
  check(jsonLdBlocks.length > 0, `${page.path}: JSON-LD missing`);
  for (const [index, block] of jsonLdBlocks.entries()) {
    const body = block.replace(/^<script[^>]*>/, "").replace(/<\/script>$/, "");
    try {
      JSON.parse(body);
    } catch {
      check(false, `${page.path}: JSON-LD block ${index + 1} is invalid JSON`);
    }
  }

  if (page.path === "/") {
    const headerChecks = [
      ["content-security-policy", "default-src"],
      ["strict-transport-security", "includeSubDomains"],
      ["x-content-type-options", "nosniff"],
      ["x-frame-options", "DENY"],
      ["referrer-policy", "strict-origin-when-cross-origin"],
    ];
    for (const [header, token] of headerChecks) {
      const value = res.headers.get(header) || "";
      check(value.includes(token), `/: header ${header} missing or incomplete ("${value}")`);
    }
  }

  if (page.path === "/contact") {
    check(html.includes("<form"), "/contact: form markup missing");
    for (const field of ['id="name"', 'id="email"', 'id="message"', 'id="service"']) {
      check(html.includes(field), `/contact: field ${field} missing`);
    }
    check(html.includes("chad@lswdesigns.info"), "/contact: fallback email missing");
  }
}

const robotsRes = await get(`${BASE}/robots.txt`);
const robotsBody = await robotsRes.text();
check(robotsRes.status === 200, `/robots.txt: status ${robotsRes.status}`);
check(robotsBody.includes(`${CANONICAL_ORIGIN}/sitemap.xml`), "/robots.txt: sitemap declaration missing");

const sitemapRes = await get(`${BASE}/sitemap.xml`);
const sitemapBody = await sitemapRes.text();
check(sitemapRes.status === 200, `/sitemap.xml: status ${sitemapRes.status}`);
for (const page of PAGES) {
  check(sitemapBody.includes(`<loc>${page.canonical}</loc>`), `/sitemap.xml: missing ${page.canonical}`);
}

const llmsRes = await get(`${BASE}/llms.txt`);
const llmsBody = await llmsRes.text();
check(llmsRes.status === 200, `/llms.txt: status ${llmsRes.status}`);
for (const page of PAGES) {
  check(llmsBody.includes(page.canonical), `/llms.txt: missing ${page.canonical}`);
}

const missingRes = await get(`${BASE}/site-audit-missing-page`);
check(missingRes.status === 404, `unknown URL: expected 404, got ${missingRes.status}`);

if (LIVE) {
  try {
    const apex = await get("https://localsignalwebsites.studio/", { redirect: "manual" });
    const location = apex.headers.get("location") || "";
    check(
      [301, 302, 307, 308].includes(apex.status) && location.startsWith(CANONICAL_ORIGIN),
      `apex redirect: status ${apex.status}, location "${location}"`
    );
  } catch (error) {
    check(false, `apex redirect: fetch failed (${error.message})`);
  }
}

if (failures.length > 0) {
  console.error(`Site audit FAILED for ${BASE}:`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Site audit passed for ${BASE}: ${PAGES.length} pages, crawl files, headers, and contact contract verified.`);
