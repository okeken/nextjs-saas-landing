"use client";

import Link from "next/link";
import BrandLogo from "@/public/assets/brand-logo.svg";
import type { DefaultFooterContent } from "./types";

export default function DefaultFooter({
  content,
}: {
  content: DefaultFooterContent;
}) {
  return (
    <footer className="bg-popover-foreground dark:bg-sidebar-border text-surface-1 dark:text-popover-foreground pt-6 pb-4">
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <div className="pb-8 border-b border-primary-foreground grid gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <Link href={content.brand.href} className="flex gap-2 items-center">
              <BrandLogo />
            </Link>
            <p className="lg:w-11/12">{content.brand.description}</p>
          </div>

          <div className="md:col-span-2 grid gap-6 md:grid-cols-4 font-medium">
            {content.columns.map((col) => (
              <div key={col.title} className="space-y-3 md:space-y-4">
                <h3 className="text-lg font-bold">{col.title}</h3>
                {col.links.map((link) => (
                  <Link key={link.href} href={link.href} className="flex">
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}

            {content.contact && (
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-lg font-bold">Contact Us</h3>
                {content.contact.email && (
                  <p className="break-all">{content.contact.email}</p>
                )}
                <div className="flex gap-6 md:gap-4 lg:gap-6 items-center">
                  {content.contact.socials?.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center pt-4 md:pt-6 p-2 md:p-4 text-sm">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
}
