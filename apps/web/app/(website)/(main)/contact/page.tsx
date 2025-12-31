import Started from "@/app/(website)/_components/Started";

import Hero from "./_components/Hero";
import Message from "./_components/Message";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact US",
};

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
