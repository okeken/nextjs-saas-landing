import { SITE } from "@/config";

type SameAs = string[];

export function organizationJsonLd(args?: {
  logoUrl?: string;
  sameAs?: SameAs;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}#org`,
    name: SITE.name,
    url: SITE.url,
    ...(args?.logoUrl ? { logo: args.logoUrl } : {}),
    ...(args?.sameAs?.length ? { sameAs: args.sameAs } : {}),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}#website`,
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": `${SITE.url}#org` },
    inLanguage: SITE.locale,
    // optional: "about" points at your software entity
    about: { "@id": `${SITE.url}#software` },
  };
}

export function softwareAppJsonLd(args?: {
  name?: string;
  description?: string;
  url?: string;
  category?: string; // BusinessApplication
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE.url}#software`,
    name: args?.name ?? SITE.name,
    description: args?.description ?? SITE.tagline,
    url: args?.url ?? SITE.url,
    applicationCategory: args?.category ?? "BusinessApplication",
    operatingSystem: "Web",
    publisher: { "@id": `${SITE.url}#org` },
  };
}

// Blog page only
export function blogPostingJsonLd(args: {
  url: string; // absolute
  title: string;
  excerpt: string;
  publishedAt: string; // ISO
  updatedAt?: string; // ISO
  authorName: string;
  image?: string; // absolute recommended
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.excerpt,
    datePublished: args.publishedAt,
    dateModified: args.updatedAt ?? args.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${args.url}#webpage` },
    author: { "@type": "Person", name: args.authorName },
    publisher: { "@id": `${SITE.url}#org` },
    about: { "@id": `${SITE.url}#software` },
    ...(args.image ? { image: [args.image] } : {}),
  };
}

// Pricing page only
export type PricingPlan = {
  name: string;
  description?: string;
  price: number;
  currency: string;
  billingPeriod?: "month" | "year" | "one-time";
  url?: string; // absolute or relative ok
};

export function pricingOfferCatalogJsonLd(args: {
  pageUrl: string; // absolute
  plans: PricingPlan[];
}) {
  const pageId = `${args.pageUrl}#webpage`;
  const catalogId = `${args.pageUrl}#offer-catalog`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": pageId,
    url: args.pageUrl,
    name: `Pricing | ${SITE.name}`,
    isPartOf: { "@id": `${SITE.url}#website` },
    about: { "@id": `${SITE.url}#software` },

    mainEntity: {
      "@type": "OfferCatalog",
      "@id": catalogId,
      name: `${SITE.name} Pricing`,
      itemListElement: args.plans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        url: plan.url ?? args.pageUrl,
        price: plan.price.toFixed(2),
        priceCurrency: plan.currency,
        ...(plan.billingPeriod
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: plan.price.toFixed(2),
                priceCurrency: plan.currency,
                unitText: plan.billingPeriod,
              },
            }
          : {}),
      })),
    },
  };
}
