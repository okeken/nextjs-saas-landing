import type { Metadata } from "next";
import type { NextWebVitalsMetric } from "next/app";
import { SITE } from "@/config";
import { JsonLd } from "./_components/seo/JsonLd";
import {
  organizationJsonLd,
  softwareAppJsonLd,
  websiteJsonLd,
} from "@/lib/seo/schema";
import Cookies from "@/components/Cookies";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.tagline,
  robots: { index: true, follow: true },
};

export function reportWebVitals(metric: NextWebVitalsMetric) {
  if (metric.name === "CLS" && metric.value > 0.1) {
    console.warn("High CLS detected", metric);
  }
  // send metric to your external monitoring backend here
}

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <link
  rel="preload"
  href="/assets/website/hero.webp"
  as="image"
  type="image/webp"
  fetchPriority="high"
/>

     <Navbar />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />

      {/* optional: include if your whole site is for a SaaS product */}
      <JsonLd data={softwareAppJsonLd()} />
      <Cookies />
      {children}
      <Footer />
    </>
  );
}
