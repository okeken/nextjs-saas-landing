"use client";

import DocsIcon from "@/public/assets/website/docs-icon.svg";
import UserIcon from "@/public/assets/website/user-icon.svg";

const Mission = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 max-w-[1440px] mx-auto py-8 md:py-12 lg:py-14 my-6 md:my-10 lg:my-14">
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-4 md:gap-8">
        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 p-3 md:p-4 lg:p-8 bg-card dark:bg-popover rounded-md border-surface-4 dark:border-surface-8 border-[0.5px]">
            <DocsIcon />
            <h4 className="font-bold sm:text-lg">Vision</h4>
            <p className="font-medium text-sm text-muted-foreground">
              The Vision plan is perfect for individuals and small teams looking
              to harness the power of MetallicJS.
            </p>
          </div>
        </div>
        <div className="shadow-(--card-shadow) p-2 rounded-md bg-background dark:bg-sidebar-border">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 p-3 md:p-4 lg:p-8 bg-card dark:bg-popover rounded-md border-surface-4 dark:border-surface-8 border-[0.5px]">
            <UserIcon />
            <h4 className="font-bold sm:text-lg">Mission</h4>
            <p className="font-medium text-sm text-muted-foreground">
              The Mission plan is designed for growing teams that require
              advanced features and dedicated support to achieve their goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
