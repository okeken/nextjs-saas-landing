import { Button } from "@metallicjs/ui/components/button";
import { cn } from "@metallicjs/ui/lib/utils";

export default function MarketingClean() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-100 to-primary-50 dark:hidden" />

      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary-500/15 blur-3xl" />
        <div className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full bg-primary-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
      </div>

      <div className="relative px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto pt-12 md:pt-14 lg:pt-16 pb-8 md:pb-10 flex flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10 text-center items-center justify-center sm:w-[80%] md:w-[70%] mx-auto py-2 md:py-4">
          <div
            className={cn(
              "rounded-full py-1 px-2 flex gap-2 items-center justify-center",
              "border border-border/60 bg-background/80 backdrop-blur",
              "dark:bg-background/40 dark:border-border/40"
            )}
          >
            <img src="/assets/website/hurray.png" alt="" className="h-4 w-4" />
            <p className="text-xs sm:text-sm text-foreground/90 dark:text-foreground">
              Next.js SaaS template — fast, clean, and SEO-ready
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight">
              Build a High-Converting SaaS Website
            </h1>

            <p className="sm:w-4/5 md:w-3/4 lg:w-3/5 mx-auto text-muted-foreground dark:text-muted-foreground">
              A polished marketing site starter for startups: landing pages,
              pricing, blog, and SEO fundamentals — designed to look premium and
              scale with your product.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-6">
            <Button className="shadow-sm dark:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.9)]">
              Get the Template
            </Button>

            <Button
              variant="outline"
              className={cn(
                "bg-background/60 backdrop-blur border-border/70",
                "hover:bg-muted/50",
                "dark:bg-background/30 dark:border-border/50 dark:hover:bg-muted/40"
              )}
            >
              View Live Demo
            </Button>
          </div>
        </div>

        <div className="relative z-10 md:w-[90%] mx-auto">
          <div
            className={cn(
              "rounded-2xl overflow-hidden",
              "ring-1 ring-border/50",
              "shadow-[0_20px_60px_-35px_rgba(0,0,0,0.35)]",
              "dark:ring-border/40 dark:shadow-[0_30px_90px_-55px_rgba(0,0,0,0.9)]"
            )}
          >
            <img
              src="/assets/website/hero.webp"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent dark:from-background" />
        </div>
      </div>
    </section>
  );
}
