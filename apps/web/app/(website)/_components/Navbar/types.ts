export type NavLink = { href: string; label: string };

export type NavCta = {
  label: string;
  href?: string; // optional if you want to scroll/handler later
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
};

export type NavbarContent = {
  brandHref: string;
  links: NavLink[];
  cta?: NavCta;
  showThemeSwitcher?: boolean;
};

export type NavbarVariant = "standardSticky" | "floatingOverlay";
