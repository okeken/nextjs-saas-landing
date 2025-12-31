const Architecture = ({
  maxWidth = "max-w-5xl",
}: {
  maxWidth?: "max-w-5xl" | "max-w-7xl";
}) => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14">
      <div className="flex flex-col gap-2 text-center mb-6 md:mb-10">
        <h3 className="text-2xl md:text-3xl font-bold">
          Architecture at a glance
        </h3>
      </div>

      <div
        className={`grid md:grid-cols-3 gap-8 md:gap-4 lg:gap-12 mx-auto ${maxWidth}`}
      >
        {/* Apps */}
        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
          <div className="flex flex-col gap-2 h-full p-2 md:p-3 lg:p-4 bg-card rounded-md">
            <h4 className="font-bold sm:text-lg">Apps</h4>
            <p className="font-medium text-xs sm:text-sm text-muted-foreground">
              Next.js website · Marketing pages · Blog & docs
            </p>
          </div>
        </div>

        {/* Packages */}
        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
          <div className="flex flex-col gap-2 h-full p-2 md:p-3 lg:p-4 bg-card rounded-md">
            <h4 className="font-bold sm:text-lg">Packages</h4>
            <p className="font-medium text-xs sm:text-sm text-muted-foreground">
              Shared UI components · Design tokens · Utilities
            </p>
          </div>
        </div>

        {/* DX */}
        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-popover border-2 border-card dark:border-sidebar-border">
          <div className="flex flex-col gap-2 h-full p-2 md:p-3 lg:p-4 bg-card rounded-md">
            <h4 className="font-bold sm:text-lg">DX</h4>
            <p className="font-medium text-xs sm:text-sm text-muted-foreground">
              TypeScript-first · Monorepo-ready · Easy to extend
            </p>
          </div>
        </div>
      </div>

      {/* subtle bridge */}
      <p className="mt-8 text-center text-sm text-muted-foreground max-w-3xl mx-auto">
        This structure is designed to grow — you can plug in APIs, workers, and
        backend services later without restructuring the site.
      </p>
    </section>
  );
};

export default Architecture;
