import Started from "@/app/(website)/_components/Started";

import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Team from "./_components/Team";
import { Metadata } from "next";

import { SITE } from "@/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About us",
  description: `Meet the team behind ${SITE.name} and the mission that drives what we build.`,
  canonical: "/about",
});

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Mission />
      <Team />
      <Started />
    </>
  );
};

export default AboutPage;
