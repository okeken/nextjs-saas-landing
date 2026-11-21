import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

import HomePage from "./(main)/one/page";

// Keep this in step with the hero copy: the title and description are what
// search results and link previews show for your home page.
export const metadata: Metadata = buildMetadata({
  title: "Next.js SaaS Landing Page Template",
  description:
    "A polished marketing site starter for startups: landing pages, pricing, blog, and SEO fundamentals, designed to look premium and scale with your product.",
  canonical: "/",
});

export default function Home() {
  return <HomePage />;
}
