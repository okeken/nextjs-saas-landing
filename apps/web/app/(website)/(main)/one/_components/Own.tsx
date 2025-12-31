"use client";

import OwnCard from "@/app/(website)/_components/OwnCard";

import ProductionIcon from "@/public/assets/website/production-icon.svg";
import CodegenIcon from "@/public/assets/website/codegen-icon.svg";
import TypesafeIcon from "@/public/assets/website/typesafe-icon.svg";
import DocsIcon from "@/public/assets/website/docs-icon.svg";
import PolishedIcon from "@/public/assets/website/polished-icon.svg";
import CmsIcon from "@/public/assets/website/cms-icon.svg";

const ownItems = [
  {
    icon: <ProductionIcon />,
    title: "Your Website, Your Code",
    description:
      "All pages, components, and styles live in your repo — no hosted builders or lock-ins.",
  },
  {
    icon: <CodegenIcon />,
    title: "Clean Project Structure",
    description:
      "A well-organised Next.js App Router setup that’s easy to understand and extend.",
  },
  {
    icon: <TypesafeIcon />,
    title: "Modern TypeScript Foundation",
    description:
      "Strong typing across components and layouts for confidence as your site grows.",
  },
  {
    icon: <DocsIcon />,
    title: "Content in Git",
    description:
      "Blog and docs pages live alongside your code for easy versioning and reviews.",
  },
  {
    icon: <PolishedIcon />,
    title: "Design You Control",
    description:
      "Tailwind-based styles and components that are simple to customise and rebrand.",
  },
  {
    icon: <CmsIcon />,
    title: "Deploy Anywhere",
    description:
      "A standard Next.js site you can deploy to any platform that supports Node or static output.",
  },
];

const Own = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10 max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Own your website. Keep full control.
        </h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          No page builders. No proprietary platforms.
          <br />
          Just a clean Next.js SaaS website you can adapt as your product
          evolves.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-8 xs:gap-4 lg:gap-12 max-w-5xl mx-auto">
        {ownItems.map((item, index) => (
          <OwnCard key={index} {...item} />
        ))}
      </div>

      {/* subtle bridge */}
      <p className="mt-10 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
        When you’re ready to add authentication, billing, and teams, this
        website is designed to plug into a full SaaS stack — without a rewrite.
      </p>
    </section>
  );
};

export default Own;
