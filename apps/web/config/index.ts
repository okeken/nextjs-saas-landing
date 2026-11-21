// On Vercel this is always set to the project's production domain (no scheme),
// so a fresh deploy gets correct canonical URLs, sitemap and robots.txt
// even before NEXT_PUBLIC_SITE_URL is configured.
const vercelProductionUrl = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelProductionUrl ? `https://${vercelProductionUrl}` : "http://localhost:3000");

export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "MySaas",
  url: siteUrl.replace(/\/+$/, ""),
  twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
  locale: "en_GB",
  tagline: process.env.NEXT_PUBLIC_TAG_LINE?.trim() || "Production-ready marketing system",
  currency: process.env.NEXT_PUBLIC_CURRENCY || "USD",
  globalLastModified: "2025-12-01",
};

// Where the template's own calls to action point (hero, navbar, footer).
// Building your product on this template? Replace these with your own links.
export const TEMPLATE_LINKS = {
  repo: "https://github.com/okeken/nextjs-saas-landing",
};
