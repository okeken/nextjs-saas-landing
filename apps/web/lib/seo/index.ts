import type { Metadata } from "next";
import { SITE } from "@/config";
import { buildOgUrl } from "./og";

export type BuildMetadataArgs = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
  ogTheme?: "light" | "dark";
  ogType?: "website" | "article";
  /** Add " | Site name" to the title (default). Turn off for a keyword-led home page title. */
  appendSiteName?: boolean;
};

export function toAbsoluteUrl(input?: string) {
  if (!input) return "";
  if (input.startsWith("http://") || input.startsWith("https://")) return input;
  return new URL(
    input.startsWith("/") ? input : `/${input}`,
    SITE.url
  ).toString();
}

export function normalizeCanonical(input?: string) {
  if (!input) return "";

  // 1) Make absolute first
  const abs = toAbsoluteUrl(input);
  if (!abs) return "";

  const url = new URL(abs);

  // 2) Strip query + hash (UTM, etc.)
  url.search = "";
  url.hash = "";

  // 3) Remove trailing slash except root
  if (url.pathname.length > 1) {
    url.pathname = url.pathname.replace(/\/+$/, "");
  }

  return url.toString();
}

export function buildMetadata({
  title,
  description,
  canonical,
  image,
  noIndex,
  ogTheme = "light",
  ogType = "website",
  appendSiteName = true,
}: BuildMetadataArgs): Metadata {
  const fullTitle =
    !appendSiteName || title.includes(SITE.name)
      ? title
      : `${title} | ${SITE.name}`;

  const canonicalUrl = normalizeCanonical(canonical);
  const defaultOg = buildOgUrl({
    title,
    subtitle: description ?? "",
    theme: ogTheme,
  });

  // `||`, not `??`: callers pass "" when a post has no image of its own.
  const ogImage = toAbsoluteUrl(image || defaultOg);

  return {
    // absolute: the brand suffix is already in fullTitle, so the layout's
    // "%s | Brand" template must not add it a second time.
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE.url),

    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,

    robots: noIndex
      ? {
          index: false,
          follow: false,
          googleBot: { index: false, follow: false },
        }
      : { index: true, follow: true },

    openGraph: {
      type: ogType,
      locale: SITE.locale,
      url: canonicalUrl || SITE.url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: SITE.twitter || undefined,
      images: ogImage ? [ogImage] : undefined,
    },
  };
}
