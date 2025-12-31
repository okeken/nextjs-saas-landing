import FAQ from "@/app/(website)/_components/FAQ";
import Started from "@/app/(website)/_components/Started";

import Compare from "./_components/Compare";
import { Metadata } from "next";
import { SITE } from "@/config";
import { JsonLd } from "../../_components/seo/JsonLd";
import { pricingOfferCatalogJsonLd } from "@/lib/seo/schema";
import Pricing from "../../_components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
};

const pageUrl = new URL("/pricing", SITE.url).toString();

const plans = [
  {
    name: "Starter",
    description: "For solo builders",
    price: 19,
    currency: SITE.currency,
    billingPeriod: "month" as const,
  },
  {
    name: "Pro",
    description: "For teams",
    price: 49,
    currency: SITE.currency,
    billingPeriod: "month" as const,
  },
];

const PricingPage = () => {
  return (
    <>
      <JsonLd
        data={pricingOfferCatalogJsonLd({
          pageUrl,
          plans,
        })}
      />
      <Pricing />
      <Compare />
      <FAQ />
      <Started />
    </>
  );
};

export default PricingPage;
