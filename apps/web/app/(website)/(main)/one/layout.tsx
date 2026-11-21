import type { Metadata } from "next";

import { HOME_DESCRIPTION, HOME_TITLE } from "@/app/(website)/home-seo";
import { buildMetadata } from "@/lib/seo";

// /one renders the same page as the home page, so it points search engines
// at "/" instead of competing with it. The navbar and footer come from the
// (website) layout; adding them here as well rendered both twice.
export const metadata: Metadata = buildMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  canonical: "/",
  appendSiteName: false,
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
