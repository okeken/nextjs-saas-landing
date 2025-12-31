import BlogHero from "./BlogHero";
import MDXWrapper from "./MDXWrapper";

type BlogMeta = {
  category: string;
  title: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  coverSrc: string;
  shareLink?: string;
};

export default function BlogLayout({
  meta,
  children,
}: {
  meta: BlogMeta;
  children: React.ReactNode;
}) {
  return (
    <div className="py-8 md:py-12">
      <BlogHero {...meta} />
      <article className="prose prose-lg max-w-none mt-8">
        <MDXWrapper>{children}</MDXWrapper>
      </article>
    </div>
  );
}
