import type { NavbarContent } from "./types";

export const navbarData: NavbarContent = {
  brandHref: "/",
  links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blogs" },
  ],
  cta: { label: "Get it Now" },
  showThemeSwitcher: true,
};
