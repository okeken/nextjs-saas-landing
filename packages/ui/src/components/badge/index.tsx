import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@metallicjs/ui/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/10 text-primary",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "text-foreground",
        success:
          "border-transparent bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
        warning:
          "border-transparent bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
        danger:
          "border-transparent bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

type Props = React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>;
export function Badge({ className, variant, ...props }: Props) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
