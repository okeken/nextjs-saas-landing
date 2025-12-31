import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  // required
  title: string;
  excerpt: string;
  publishedAt: string; // "YYYY-MM-DD" or ISO

  // optional
  updatedAt?: string;
  category?: string;
  author?: string;
  authorImageSrc?: string;
  coverSrc?: string;
  readingTime?: string;
  draft?: boolean;
};

export type BlogPost = {
  slug: string;
  meta: {
    title: string;
    excerpt: string;
    publishedAt: string; // ISO
    updatedAt: string; // ISO
    category: string;
    author: string;
    authorImageSrc: string;
    coverSrc: string;
    readingTime: string;
    draft: boolean;
  };
  content: string;
};

function toIso(dateLike: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateLike));
}

function fileToSlug(filename: string) {
  return filename.replace(/\.mdx?$/, "");
}

export function getAllBlogSlugs() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map(fileToSlug);
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const mdx = path.join(BLOG_DIR, `${slug}.mdx`);
  const md = path.join(BLOG_DIR, `${slug}.md`);

  const filePath = fs.existsSync(mdx) ? mdx : fs.existsSync(md) ? md : null;
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);

  const fm = parsed.data as Partial<BlogFrontmatter>;

  if (!fm.title || !fm.excerpt || !fm.publishedAt) {
    throw new Error(
      `Missing required frontmatter in ${filePath}. Required: title, excerpt, publishedAt`
    );
  }

  const publishedAt = toIso(String(fm.publishedAt));
  const updatedAt = toIso(String(fm.updatedAt ?? fm.publishedAt));

  return {
    slug,
    meta: {
      title: String(fm.title),
      excerpt: String(fm.excerpt),
      publishedAt,
      updatedAt,
      category: fm.category ?? "General",
      author: fm.author ?? "Team",
      authorImageSrc: fm.authorImageSrc ?? "/assets/website/author-image.png",
      coverSrc: fm.coverSrc ?? "/assets/website/blog-image.png",
      readingTime: fm.readingTime ?? "—",
      draft: Boolean(fm.draft),
    },
    content: parsed.content,
  };
}

export function getAllPublishedBlogPosts() {
  return getAllBlogSlugs()
    .map((slug) => getBlogPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p))
    .filter((p) => !p.meta.draft)
    .sort(
      (a, b) => Date.parse(b.meta.updatedAt) - Date.parse(a.meta.updatedAt)
    );
}
