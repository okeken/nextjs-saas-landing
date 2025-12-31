"use client";

import { useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@metallicjs/ui/components/select";

import SearchIcon from "@/public/assets/website/search-icon.svg";
import ArrowDownIcon from "@/public/assets/website/arrow-down-icon.svg";
import BlogCard from "./BlogCard";

type PostListItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorImageSrc: string;
  coverSrc: string;
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  readingTime: string;
};

const PAGE_SIZE = 6;

export default function Content({ posts = [] }: { posts: PostListItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["all", ...Array.from(set)];
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);

      const matchesCategory = category === "all" || p.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [posts, query, category]);

  const page = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;

  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:pb-12 lg:pb-14">
      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4 sm:gap-2">
        <div className="bg-background dark:bg-sidebar-border p-3 flex gap-3 rounded-md max-w-2xs sm:min-w-96 sm:max-w-lg lg:min-w-lg lg:max-w-xl">
          <SearchIcon />
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            type="text"
            className="bg-transparent border-none outline-none flex-1"
            placeholder="Enter search here"
          />
        </div>

        <div className="flex self-end xs:self-center">
          <Select
            value={category}
            onValueChange={(v) => {
              setCategory(v);
              setVisible(PAGE_SIZE);
            }}
          >
            <SelectTrigger className="w-[180px] h-full border-0">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>

            <SelectContent className="text-muted-foreground">
              <SelectGroup>
                {categories.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c === "all" ? "All Categories" : c}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10 xl:gap-12 my-8 md:my-10">
        {page.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <div className="flex items-center justify-center">
        {canLoadMore ? (
          <button
            type="button"
            onClick={() => setVisible((n) => n + PAGE_SIZE)}
            className="shadow-[0px_1px_2px_0px_#0000000D] flex gap-2 sm:gap-3 lg:gap-4 items-center bg-card border border-sidebar text-primary-500 rounded-full p-3 px-4 md:p-4 md:px-6 font-bold cursor-pointer dark:bg-sidebar-border"
          >
            <p>Load More</p>
            <ArrowDownIcon />
          </button>
        ) : null}
      </div>
    </section>
  );
}
