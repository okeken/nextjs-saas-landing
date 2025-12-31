import FacebookLogo from "@/public/assets/website/fb-logo.svg";
import InstagramLogo from "@/public/assets/website/ig-logo.svg";
import XLogo from "@/public/assets/website/x-logo.svg";
import { SITE } from "@/config";

import type {
  SimpleLinksBarContent,
  DefaultFooterContent,
} from "./types";

export const simpleLinksBarData: SimpleLinksBarContent = {
  links: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  socials: [
    { label: "Facebook", href: "#", icon: FacebookLogo },
    { label: "X", href: "#", icon: XLogo },
    { label: "Instagram", href: "#", icon: InstagramLogo },
  ],
  copyright: `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`,
  logoSrc: "/assets/website/footer-logo.webp",
};

export const defaultFooterData: DefaultFooterContent = {
  brand: {
    href: "/",
    description:
      "Build real SaaS faster. Own your stack, your data, and your roadmap.",
  },
  columns: [
    {
      title: "Resources",
      links: [
        { label: "Contact", href: "/contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  contact: {
    email: "hello@mysaas.com",
    socials: [
      { label: "Facebook", href: "#", icon: FacebookLogo },
      { label: "X", href: "#", icon: XLogo },
      { label: "Instagram", href: "#", icon: InstagramLogo },
    ],
  },
  copyright: `© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.`,
};
