import { CheckCircle2 as TickLogo } from "lucide-react";

import WarningLogo from "@/public/assets/website/warning-icon.svg";
import CloseLogo from "@/public/assets/website/close-circle-icon.svg";

const Kits = ({
  maxWidth = "max-w-5xl",
}: {
  maxWidth?: "max-w-5xl" | "max-w-7xl";
}) => {
  return (
    <section className="px-4 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className={`${maxWidth} mx-auto`}>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-10 lg:mb-14 text-center">
          Templates vs. a real SaaS website foundation
        </h3>

        <div className="overflow-x-auto">
          <div className="overflow-hidden min-w-[500px]">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold mb-4 md:mb-6">
              <h3 className="md:text-xl lg:text-2xl md:col-span-2">
                Capability
              </h3>
              <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-sm md:text-base text-center">
                <h4>This Template</h4>
                <h4>Typical Template</h4>
                <h4>Page Builders</h4>
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
              <h4 className="text-[13px] md:text-base md:col-span-2">
                SEO-friendly structure (metadata, headings, crawlable pages)
              </h4>
              <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <TickLogo className="text-primary scale-80" />
                  <p>Built-in</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Varies</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Limited</p>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
              <h4 className="text-[13px] md:text-base md:col-span-2">
                Polished UI components (buttons, forms, tables, modals)
              </h4>
              <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <TickLogo className="text-primary scale-80" />
                  <p>Ready</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Basic</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Depends</p>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
              <h4 className="text-[13px] md:text-base md:col-span-2">
                Blog + docs pages you can version in Git
              </h4>
              <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <TickLogo className="text-primary scale-80" />
                  <p>Included</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Sometimes</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <CloseLogo className="text-primary scale-80" />
                </div>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
              <h4 className="text-[13px] md:text-base md:col-span-2">
                Rebrand quickly (tokens, theming, light/dark)
              </h4>
              <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <TickLogo className="text-primary scale-80" />
                  <p>Easy</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Hard</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Limited</p>
                </div>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 font-bold border-b border-surface-4 dark:border-surface-8 py-3 md:py-4">
              <h4 className="text-[13px] md:text-base md:col-span-2">
                Deploy anywhere (standard Next.js)
              </h4>
              <div className="col-span-2 md:col-span-3 grid grid-cols-3 gap-2 items-center text-muted-foreground text-xs md:text-sm text-center">
                <div className="flex items-center justify-center gap-2">
                  <TickLogo className="text-primary scale-80" />
                  <p>Yes</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <TickLogo className="text-primary scale-80" />
                  <p>Yes</p>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <WarningLogo className="text-primary scale-80" />
                  <p>Platform-bound</p>
                </div>
              </div>
            </div>

            {/* optional footer note */}
            <div className="pt-4">
              <p className="text-xs md:text-sm text-muted-foreground text-center">
                Tip: this repo focuses on the{" "}
                <span className="font-bold">website foundation</span>. You can
                plug in auth, billing, and backend services later — without
                rewriting your marketing site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kits;
