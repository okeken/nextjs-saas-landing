"use client";

import React from "react";
import type { NavbarContent, NavbarVariant } from "./types";
import { navbarData } from "./data";

import StandardSticky from "./StandardSticky";

export interface NavbarProps {
  variant?: NavbarVariant;
  content?: NavbarContent;
  centerLinks?: boolean; // kept as a simple layout option (NOT part of content)
  className?: string;
}

export default function Navbar({
  content,
  centerLinks = false,
  className,
}: NavbarProps) {
  const c = content ?? navbarData;

  return (
    <StandardSticky content={c} centerLinks={centerLinks} className={className} />
  );
}
