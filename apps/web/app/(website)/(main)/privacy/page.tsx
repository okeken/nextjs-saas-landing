import type { Metadata } from "next";

import Started from "@/app/(website)/_components/Started";
import { SITE } from "@/config";
import { buildMetadata } from "@/lib/seo";

import Content from "./_components/Content";
import Hero from "./_components/Hero";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `How ${SITE.name} collects, uses and protects your information.`,
  canonical: "/privacy",
});

const PrivacyPage = () => {
  return (
    <>
      <Hero />
      <Content />
      <Started />
    </>
  );
};

export default PrivacyPage;
