import Started from "@/app/(website)/_components/Started";

import Hero from "./_components/Hero";
import Mission from "./_components/Mission";
import Team from "./_components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About US",
};

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
