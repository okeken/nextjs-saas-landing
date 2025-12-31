"use client";

import BenefitCard from "@/app/(website)/_components/BenefitCard";

import ProductionIcon from "@/public/assets/website/production-icon.svg";
import CodegenIcon from "@/public/assets/website/codegen-icon.svg";
import TypesafeIcon from "@/public/assets/website/typesafe-icon.svg";
import BillingIcon from "@/public/assets/website/billing-icon.svg";
import PolishedIcon from "@/public/assets/website/polished-icon.svg";
import CmsIcon from "@/public/assets/website/cms-icon.svg";

const benefits = [
  {
    icon: <ProductionIcon />,
    title: "Production-Quality Layouts",
    description:
      "Carefully structured pages for landing, pricing, blog, and docs — built to scale as your SaaS grows.",
  },
  {
    icon: <CodegenIcon />,
    title: "Clean, Maintainable Structure",
    description:
      "A well-organised Next.js App Router setup with sensible defaults and room to extend.",
  },
  {
    icon: <TypesafeIcon />,
    title: "Type-Safe Frontend Foundation",
    description:
      "Built with modern TypeScript patterns for components, props, and data flow.",
  },
  {
    icon: <BillingIcon />,
    title: "Pricing-Ready Pages",
    description:
      "Flexible pricing and plan layouts designed to plug into any billing system later.",
  },
  {
    icon: <PolishedIcon />,
    title: "Polished UI System",
    description:
      "Tailwind-based, shadcn-style components for buttons, forms, tables, and modals — easy to rebrand.",
  },
  {
    icon: <CmsIcon />,
    title: "Content & SEO Ready",
    description:
      "Blog and content pages with SEO-friendly structure, metadata, and clean typography.",
  },
];

const Benefits = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          What This Template Gives You
        </h3>
        <p className="text-sm sm:text-base font-medium text-muted-foreground">
          A solid Next.js SaaS website foundation — clean, modern, and
          SEO-ready.
        </p>
      </div>

      <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-8 xs:gap-4 lg:gap-12 max-w-5xl mx-auto">
        {benefits.map((item, index) => (
          <BenefitCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;
