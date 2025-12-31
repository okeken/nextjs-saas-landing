export const SITE = {
  name: process.env.NEXT_PUBLIC_SITE_NAME as string,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? ("http://localhost:3000" as string),
  twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
  locale: "en_GB",
  tagline: process.env.NEXT_PUBLIC_TAG_LINE ?? ("" as string),
  currency: process.env.NEXT_PUBLIC_CURRENCY ?? ("USD" as string),
  globalLastModified: "2025-12-01",
};
