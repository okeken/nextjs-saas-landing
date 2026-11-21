import type { MetadataRoute } from "next";
import { SITE } from "@/config";

export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, "");
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
      sitemap: `${base}/sitemap.xml`,
      host: base,
    };
  }

  // Crawlers need /_next/ (CSS + JS) to render pages, and link-preview bots
  // (X, LinkedIn, Slack) need /api/og for the share image. The longer
  // "/api/og" allow wins over the "/api/" disallow.
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/og"],
        disallow: ["/api/", "/dashboard/", "/app/", "/auth/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
