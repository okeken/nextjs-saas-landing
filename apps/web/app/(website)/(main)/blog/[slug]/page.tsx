import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogLayout from "../_components/BlogLayout";
import { mdxComponents } from "../_components/mdx-components";

import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog/fs";
import { buildMetadata, toAbsoluteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { SITE } from "@/config";
import { clamp } from "@/lib/clamp";
import { blogPostingJsonLd } from "@/lib/seo/schema";
import { JsonLd } from "@/app/(website)/_components/seo/JsonLd";

// Drafts (frontmatter `draft: true`) render under `pnpm dev` so you can
// preview them, but a production build neither builds nor serves them.
const hideDrafts = process.env.NODE_ENV === "production";

function getVisiblePost(slug: string) {
  const post = getBlogPostBySlug(slug);
  if (!post || (hideDrafts && post.meta.draft)) return null;
  return post;
}

export async function generateStaticParams() {
  return getAllBlogSlugs()
    .filter((slug) => getVisiblePost(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getVisiblePost(slug);
  if (!post) return buildMetadata({ title: "Not found", noIndex: true });

  const description =
    post?.meta?.excerpt ??
    clamp(post.content) ??
    `Read the latest insights from ${SITE.name}`;

  // No `image`: the generated /api/og card (post title on brand colours)
  // makes a better link preview than the author's small avatar.
  return buildMetadata({
    title: post.meta.title,
    description,
    canonical: `/blog/${slug}`,
    ogTheme: "light",
    ogType: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = getVisiblePost(slug);
  if (!post) notFound();

  const {
    category,
    title,
    author,
    publishedAt,
    excerpt,
    readingTime,
    updatedAt,
    coverSrc,
  } = post.meta;
  const url = toAbsoluteUrl(`/blog/${post.slug}`) as string;
  const image = toAbsoluteUrl(coverSrc);

  return (
    <>
      <JsonLd
        data={blogPostingJsonLd({
          title,
          excerpt,
          url,
          publishedAt,
          updatedAt,
          authorName: author,
          image,
        })}
      />

      <BlogLayout
        meta={{
          category,
          title,
          author,
          publishedAt,
          readingTime,
          coverSrc,
          shareLink: `${SITE.url}/blog/${slug}`,
        }}
      >
        <MDXRemote source={post.content} components={mdxComponents} />
      </BlogLayout>
    </>
  );
}
