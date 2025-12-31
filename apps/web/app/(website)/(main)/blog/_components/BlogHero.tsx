"use client";

import { useState } from "react";

import CalendarIcon from "@/public/assets/website/calendar-icon.svg";
import ReadingTimeIcon from "@/public/assets/website/reading-time-icon.svg";
import BlogShareIcon from "@/public/assets/website/blog-share-icon.svg";
import { Badge } from "@metallicjs/ui/components/badge";
import ShareModal from "../[slug]/_components/ShareModal";

type BlogHeroProps = {
  category: string;
  title: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  coverSrc: string;
  shareLink?: string;
};

export default function BlogHero({
  category,
  title,
  author,
  publishedAt,
  readingTime,
  coverSrc,
  shareLink = "",
}: BlogHeroProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div>
        <Badge className="rounded-full px-4 py-1 font-normal">{category}</Badge>
      </div>

      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">{title}</h1>

      <div className="max-h-44 md:max-h-60 lg:max-h-96 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src={coverSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="text-muted-foreground flex gap-2 xs:gap-3 items-center text-xs sm:text-sm">
          <div className="flex gap-1 items-center">
            <div className="h-5 w-5 sm:h-8 sm:w-8 rounded-full overflow-hidden flex justify-center items-center">
              <img src="/assets/website/author-image.png" alt={author} />
            </div>
            <p>{author}</p>
          </div>

          <div className="hidden xsm:block h-1 w-1 rounded-full bg-neutral-subtle dark:bg-surface-6" />

          <div className="flex gap-1 items-center">
            <CalendarIcon />
            <p>{publishedAt}</p>
          </div>

          <div className="hidden xsm:block h-1 w-1 rounded-full bg-neutral-subtle dark:bg-surface-6" />

          <div className="flex gap-1 items-center">
            <ReadingTimeIcon />
            <p>{readingTime}</p>
          </div>
        </div>

        <button
          type="button"
          className="hidden sm:flex gap-1 items-center cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <BlogShareIcon />
          <span className="underline text-primary-500 font-bold">Share</span>
        </button>
      </div>

      {open ? (
        <ShareModal link={shareLink} open={open} setOpen={setOpen} />
      ) : null}
    </div>
  );
}
