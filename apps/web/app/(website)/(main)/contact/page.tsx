import Started from "@/app/(website)/_components/Started";

import Hero from "./_components/Hero";
import Message from "./_components/Message";
import { Metadata } from "next";

import { SITE } from "@/config";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact us",
  description: `Questions about ${SITE.name}? Send us a message and we'll get back to you.`,
  canonical: "/contact",
});

const ContactPage = () => {
  return (
    <>
      <Hero />
      <Message />
      <Started />
    </>
  );
};

export default ContactPage;
