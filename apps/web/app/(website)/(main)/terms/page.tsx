import type { Metadata } from "next";

import Started from "@/app/(website)/_components/Started";
import { SITE } from "@/config";
import { buildMetadata } from "@/lib/seo";

import Content from "./_components/Content";
import Hero from "./_components/Hero";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description: `The terms that apply when you use ${SITE.name}.`,
  canonical: "/terms",
});

const TermsPage = () => {
  return (
    <>
      <Hero />
      <Content />
      <Started />
    </>
  );
};

export default TermsPage;
