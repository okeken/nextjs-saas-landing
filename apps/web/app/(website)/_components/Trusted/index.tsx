import React from "react";

import { Partner, defaultDescription, defaultPartners } from "./data";
import MarqueeCenter from "./Default";

export type TrustedVariant = "default" | "textGrid";

export interface TrustedProps {
  variant?: TrustedVariant;
  partners?: Partner[];
  className?: string;

  // only used by the "textGrid" variant
  heading?: React.ReactNode;
  description?: React.ReactNode;
}

export default function Trusted({
  variant = "default",
  partners = defaultPartners,
  className,
  heading,
  description = defaultDescription,
}: TrustedProps) {
  const logos = partners.length ? partners : defaultPartners;

  return (
    <>
   
    <MarqueeCenter className={className} partners={logos} heading={heading} />
    </>
  );
}
