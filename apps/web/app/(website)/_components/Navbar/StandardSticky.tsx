"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { useState } from "react";

import BrandLogo from "@/public/assets/brand-logo.svg";
import { Button } from "@metallicjs/ui/components/button";
import { ThemeSwitcher } from "@metallicjs/ui/components/theme-switcher";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@metallicjs/ui/components/sheet";
import { cn } from "@metallicjs/ui/lib/utils";

import type { NavbarContent } from "./types";

export default function StandardSticky({
  content,
  centerLinks,
  className,
}: {
  content: NavbarContent;
  centerLinks?: boolean;
  className?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    const pathArr = pathname.split("/");
    const isSubPage = pathArr.length > 2;
    return isSubPage && href !== "/" ? pathname.includes(href) : pathname === href;
  };

  return (
    <div
      className={cn(
        "w-full bg-card dark:bg-sidebar-border text-accent-foreground border-b border-sidebar-border sticky top-0 z-50",
        className
      )}
    >
      <div className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto">
        <nav
          className={cn(
            "flex items-center py-3 justify-between gap-1 xsm:gap-2 max-w-7xl mx-auto",
            centerLinks ? "lg:justify-start" : ""
          )}
        >
          <Link href={content.brandHref} className="flex gap-2 items-center" prefetch={false}>
            <BrandLogo />
          </Link>

          {/* Desktop */}
          <div
            className={cn(
              "hidden lg:flex items-center gap-6 lg:gap-8 xl:gap-11",
              centerLinks ? "flex-1" : ""
            )}
          >
            <div
              className={cn(
                "flex items-center gap-6 lg:gap-8 xl:gap-11",
                centerLinks ? "flex-1 justify-center" : ""
              )}
            >
              {content.links.map((l) => (
                <Link
                  key={l.href+ l.label}
                  href={l.href}
                  prefetch={false}
                  className={cn(
                    "text-sm font-medium hover:underline underline-offset-4",
                    isActive(l.href) ? "text-primary" : ""
                  )}
                >
                  &nbsp;{l.label}&nbsp;
                </Link>
              ))}
            </div>

            {content.cta ? (
              <Button variant={content.cta.variant ?? "default"}>
                {content.cta.label}
              </Button>
            ) : null}

            {content.showThemeSwitcher ? (
              <ThemeSwitcher onModeChange={() => setOpen(false)} />
            ) : null}
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-1 xsm:gap-2">
            {content.cta ? (
              <Button className="px-2 xsm:px-4" size="sm">
                {content.cta.label}
              </Button>
            ) : null}

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="sm:h-6 sm:w-6 h-4 w-4" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right">
                <div className="grid gap-4 p-4">
                  {content.links.map((l) => (
                    <SheetTrigger asChild key={l.href+ l.label}>
                      <Link
                        href={l.href}
                        className="flex items-center gap-2 text-lg font-medium"
                        prefetch={false}
                      >
                        {l.label}
                      </Link>
                    </SheetTrigger>
                  ))}

                  {content.showThemeSwitcher ? (
                    <ThemeSwitcher onModeChange={() => setOpen(false)} />
                  ) : null}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </div>
  );
}
