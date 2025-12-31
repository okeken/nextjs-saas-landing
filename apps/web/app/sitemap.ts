import type { MetadataRoute } from "next";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog/fs";
import { toAbsoluteUrl } from "@/lib/seo";
import { SITE } from "@/config";

const STATIC_LASTMOD = new Date(SITE.globalLastModified);

export default function sitemap(): MetadataRoute.Sitemap {
  // Static marketing pages you want indexed
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: toAbsoluteUrl("/"),
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: toAbsoluteUrl("/pricing"),
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: toAbsoluteUrl("/blog"),
      lastModified: STATIC_LASTMOD,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: toAbsoluteUrl("/about"),
      lastModified: STATIC_LASTMOD,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: toAbsoluteUrl("/contact"),
      lastModified: STATIC_LASTMOD,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    // add /terms /privacy etc if you have them
  ];

  //  Blog posts (real updatedAt -> lastModified)
  const blogRoutes: MetadataRoute.Sitemap = getAllBlogSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post) => post && !post.meta?.draft)
    .map((post) => {
      const iso = post!.meta.updatedAt || post!.meta.publishedAt;
      return {
        url: toAbsoluteUrl(`/blog/${post!.slug}`),
        lastModified: iso ? new Date(iso) : STATIC_LASTMOD,
        changeFrequency: "monthly",
        priority: 0.7,
      };
    });

  return [...staticRoutes, ...blogRoutes];
}
