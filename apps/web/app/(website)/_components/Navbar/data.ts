import { Github } from "lucide-react";

import { TEMPLATE_LINKS } from "@/config";

import type { NavbarContent } from "./types";

export const navbarData: NavbarContent = {
  brandHref: "/",
  links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blogs" },
  ],
  cta: { label: "Star on GitHub", href: TEMPLATE_LINKS.repo, icon: Github },
  showThemeSwitcher: true,
};
