export type SocialLink = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type SimpleLinksBarContent = {
  links: { label: string; href: string }[];
  socials: SocialLink[];
  copyright: string;
  logoSrc?: string;
};

export type DefaultFooterContent = {
  brand: {
    href: string;
    description: string;
  };
  columns: {
    title: string;
    links: { label: string; href: string }[];
  }[];
  contact?: {
    email?: string;
    socials?: SocialLink[];
  };
  copyright: string;
};
