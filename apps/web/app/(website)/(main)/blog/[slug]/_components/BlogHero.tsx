import { useState } from "react";

import { Badge } from "@metallicjs/ui/components/badge";

import ShareModal from "./ShareModal";

import CalendarIcon from "@/public/assets/website/calendar-icon.svg";
import ReadingTimeIcon from "@/public/assets/website/reading-time-icon.svg";
import BlogShareIcon from "@/public/assets/website/blog-share-icon.svg";

const BlogHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <div>
        <Badge className="rounded-full px-4 py-1 font-normal">Category</Badge>
      </div>

      <h4 className="font-bold text-xl md:text-2xl lg:text-3xl">
        Funding and Startups — Why Investors Are Betting Big on Nigerian
        Startups
      </h4>

      <div className="max-h-44 md:max-h-60 lg:max-h-96 rounded-lg overflow-hidden flex items-center justify-center">
        <img
          src="/assets/website/blog-image.png"
          alt=""
          className="h-full w-full"
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="text-muted-foreground flex gap-2 xs:gap-3 items-center text-xs sm:text-sm">
          <div className="flex gap-1 items-center">
            <div className="h-5 w-5 sm:h-8 sm:w-8 rounded-full overflow-hidden flex justify-center items-center">
              <img src="/assets/website/author-image.png" alt="" />
            </div>
            <p className="">ken</p>
          </div>
          <div className="hidden xsm:block h-1 w-1 rounded-full bg-neutral-subtle dark:bg-surface-6"></div>
          <div className="flex gap-1 items-center">
            <CalendarIcon />
            <p>Apr 28, 2022</p>
          </div>
          <div className="hidden xsm:block h-1 w-1 rounded-full bg-neutral-subtle dark:bg-surface-6"></div>
          <div className="flex gap-1 items-center">
            <ReadingTimeIcon />
            <p>1 min read</p>
          </div>
        </div>

        <div
          className="sm:flex gap-1 items-center cursor-pointer hidden"
          onClick={() => setOpen(true)}
        >
          <BlogShareIcon />
          <p className="underline text-primary-500 font-bold">Share</p>
        </div>
      </div>

      {open ? <ShareModal link="" open={open} setOpen={setOpen} /> : null}
    </div>
  );
};

export default BlogHero;
