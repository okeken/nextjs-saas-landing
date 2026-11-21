import Hero from "./_components/Hero";
import Content from "./_components/Content";
import { getAllPublishedBlogPosts } from "@/lib/blog/fs";
import { Metadata } from "next";
import { SITE } from "@/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog",
  description: `Guides, product updates and ideas from the ${SITE.name} team.`,
  canonical: "/blog",
});

export default function BlogsPage() {
  const posts = getAllPublishedBlogPosts().map((p) => ({
    slug: p.slug,
    ...p.meta,
  }));

  return (
    <>
      <Hero />
      <Content posts={posts} />
    </>
  );
}
