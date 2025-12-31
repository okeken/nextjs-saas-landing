import Hero from "./_components/Hero";
import Content from "./_components/Content";
import { getAllPublishedBlogPosts } from "@/lib/blog/fs";
import { Metadata } from "next";
import { SITE } from "@/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Blog",
};

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
