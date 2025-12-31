"use client";

import DefaultFooter from "./DefaultFooter";

import {
  simpleLinksBarData,
  defaultFooterData,
} from "./data";

import type {
  SimpleLinksBarContent,
  DefaultFooterContent,
} from "./types";

export type FooterVariant = "simpleLinksBar" | "default";

export interface FooterProps {
  variant?: FooterVariant;
  content?: SimpleLinksBarContent | DefaultFooterContent;
}

export default function Footer({
  content,
}: FooterProps) {

  return (
    <DefaultFooter      
      content={(content as DefaultFooterContent) ?? defaultFooterData}
    />
  );
}
