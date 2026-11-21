import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

import HomePage from "./(main)/one/page";
import { HOME_DESCRIPTION, HOME_TITLE } from "./home-seo";

export const metadata: Metadata = buildMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  canonical: "/",
  appendSiteName: false,
});

export default function Home() {
  return <HomePage />;
}
