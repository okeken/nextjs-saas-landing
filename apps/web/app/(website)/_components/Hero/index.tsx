import React from "react";

import DefaultHero from "./Default";

export type HeroVariant = "default" | "marketingGlass" | "productSplit";

export interface HeroProps {
  variant?: HeroVariant;
}

export default function Hero() {

  return <DefaultHero />;
}
