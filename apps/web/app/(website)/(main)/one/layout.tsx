import type { Metadata } from "next";

import { buildMetadata } from "@/lib/seo";

// /one renders the same page as the home page, so it points search engines
// at "/" instead of competing with it. The navbar and footer come from the
// (website) layout; adding them here as well rendered both twice.
export const metadata: Metadata = buildMetadata({
  title: "Next.js SaaS Landing Page Template",
  canonical: "/",
});

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
