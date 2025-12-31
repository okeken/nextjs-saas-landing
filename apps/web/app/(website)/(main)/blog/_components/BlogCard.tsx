import Link from "next/link";
import { Badge } from "@metallicjs/ui/components/badge";
import CalendarIcon from "@/public/assets/website/calendar-icon.svg";

export default function BlogCard({
  post,
}: {
  post: {
    id?:string
    slug: string;
    title: string;
    category: string;
    author: string;
    authorImageSrc: string;
    coverSrc: string;
    publishedAt: string; // ISO
  };
}) {
  const date = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="flex flex-col gap-3">
        <div className="max-h-44 xs:max-h-60 overflow-hidden rounded-lg flex items-center justify-center">
          <img
            src={post.coverSrc}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <Badge className="rounded-full px-4 py-1 font-normal">
            {post.category}
          </Badge>
        </div>

        <h4 className="font-bold text-lg">{post.title}</h4>

        <div className="text-muted-foreground flex gap-2 xs:gap-3 items-center text-sm">
          <div className="flex gap-1 items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden flex justify-center items-center">
              <img src={post.authorImageSrc} alt={post.author} />
            </div>
            <p>{post.author}</p>
          </div>

          <div className="h-1 w-1 rounded-full bg-neutral-subtle dark:bg-surface-6" />

          <div className="flex gap-1 items-center">
            <CalendarIcon />
            <p>{date}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
