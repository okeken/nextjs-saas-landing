import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  [
    // base
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium",
    // polish
    "outline-none transition-[transform,box-shadow,background-color] duration-150 active:scale-[.98]",
    // focus scaffolding (color set per-variant)
    "focus-visible:ring-2 focus-visible:ring-offset-2",
    // states
    "disabled:opacity-50 disabled:pointer-events-none",
    // make sure embedded svgs inherit size
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary = brand accent surface
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 focus-visible:ring-primary/50",

        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/50",

        outline:
          "border border-input bg-background/80 shadow-xs hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/40",

        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 focus-visible:ring-secondary/40",

        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:ring-accent/40",

        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-transparent focus-visible:ring-offset-0",

        // Muted stays neutral—no red hover or ring
        subtle:
          "bg-muted text-foreground hover:bg-muted/80 focus-visible:ring-muted/40",
      },
      size: {
        // 40px default height for nicer tap targets
        default: "h-10 px-4 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-11 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-10",
      },
      fullWidth: { true: "w-full", false: "" },
      loading: { true: "cursor-wait", false: "" },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      loading: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Is this the principal call to action on the page? */
  primary?: boolean;

  /** How large should the button be? */
  size?: "sm" | "default" | "lg" | "icon";

  /** Optional click handler */
  onClick?: () => void;

  /** Render as child component (e.g. <Link>) instead of <button> */
  asChild?: boolean;

  /** Show loading spinner */
  isLoading?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  fullWidth,
  isLoading,
  loading,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const pending = isLoading ?? loading ?? false;

  return (
    <Comp
      data-slot="button"
      aria-busy={pending || undefined}
      disabled={(props as any).disabled || pending}
      className={cn(
        buttonVariants({ variant, size, fullWidth, loading: pending }),
        className
      )}
      {...props}
    >
      {pending && <Loader2Icon className="animate-spin" />}
      {props.children}
    </Comp>
  );
}

export { Button, buttonVariants };
