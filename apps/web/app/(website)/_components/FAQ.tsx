"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@metallicjs/ui/components/accordion";

import OpenIcon from "@/public/assets/website/accordion-open-icon.svg";
import CloseIcon from "@/public/assets/website/accordion-close-icon.svg";

const faqs = [
  {
    q: "What is this template for?",
    a: "This is a Next.js SaaS website template — a polished marketing site foundation with landing sections, pricing layouts, and content-ready pages you can customise and ship fast.",
  },
  {
    q: "Is this a full SaaS starter kit with auth and billing?",
    a: "No. This repo focuses on the website layer (marketing + content). You can connect your own backend, authentication, billing, and product logic later.",
  },
  {
    q: "What’s included out of the box?",
    a: "A clean page structure, reusable sections, responsive layouts, and a UI system you can rebrand. It’s designed to help you launch a credible SaaS website quickly.",
  },
  {
    q: "Can I rebrand it easily?",
    a: "Yes. The styling is designed for quick rebrands — swap colours, typography, spacing, and components without rewriting the whole UI.",
  },
  {
    q: "Does it include a blog or docs?",
    a: "Yes — it includes content-ready pages (like blog/docs style layouts) so you can publish updates, articles, and product documentation as you grow.",
  },
  {
    q: "Is it SEO-friendly?",
    a: "It’s built with SEO in mind: clean structure, consistent headings, and metadata-ready layouts. Ranking still depends on your content quality, internal linking, and indexing choices.",
  },
  {
    q: "Is it mobile-friendly and accessible?",
    a: "The layouts are responsive by default and designed to be readable and usable on small screens. You can further improve accessibility by reviewing colour contrast, focus states, and semantic markup for your content.",
  },
  {
    q: "Where can I deploy it?",
    a: "Anywhere that supports Next.js. You can deploy to platforms like Vercel, Netlify, Render, Fly, or your own server — as static or server-rendered depending on your setup.",
  },
  {
    q: "Can I use this for commercial projects?",
    a: "Usually yes — but always check the LICENSE file in the repo for the exact terms, especially if you plan to redistribute or resell a derivative template.",
  },
  {
    q: "How should I extend it when my product grows?",
    a: "Keep the marketing site stable, add new sections as needed, and plug in product features gradually (forms, dashboard pages, API routes, auth, billing). The goal is to evolve without rebuilding the website.",
  },
];

const FAQ = ({
  maxWidth = "max-w-5xl",
  headingsAlign = "text-center",
  showBubble = false,
  subtitle,
}: {
  maxWidth?: "max-w-5xl" | "max-w-7xl";
  headingsAlign?: "text-center" | "text-left";
  subtitle?: string;
  showBubble?: boolean;
}) => {
  return (
    <section className="px-4 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div
        className={`flex flex-col gap-2 ${headingsAlign} mb-6 md:mb-10 ${maxWidth} mx-auto`}
      >
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Frequently Asked Questions
        </h3>

        {subtitle ? (
          <p className="text-sm sm:text-base font-medium text-muted-foreground mx-auto xs:w-4/5 md:w-3/5">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className={`mx-auto ${maxWidth}`}>
        <Accordion type="multiple" className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border-2 data-[state=closed]:border-none data-[state=open]:border-primary-700 my-3 md:my-4 rounded-xl cursor-pointer"
            >
              <AccordionTrigger
                openIcon={<OpenIcon />}
                closeIcon={<CloseIcon />}
                className="rounded-xl border-2 data-[state=closed]:border-input data-[state=open]:border-none py-2 px-3 xs:py-3 xs:px-5 lg:px-7 xl:px-8 cursor-pointer font-bold text-lg md:text-xl"
              >
                {item.q}
              </AccordionTrigger>

              <AccordionContent className="flex flex-col gap-4 text-balance py-2 px-3 xs:py-3 xs:px-5 lg:px-7 text-muted-foreground">
                <p>{item.a}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {showBubble ? (
        <div className="mt-4 md:mt-6 max-w-5xl mx-auto xs:w-11/12 sm:w-10/12">
          <p className="flex items-center justify-center p-2 md:py-3 bg-sidebar-border text-muted-foreground rounded-lg text-xs md:text-sm text-center">
            This template gives you a clean, SEO-ready SaaS website foundation —
            and a structure that can grow with your product over time.
          </p>
        </div>
      ) : null}
    </section>
  );
};

export default FAQ;
