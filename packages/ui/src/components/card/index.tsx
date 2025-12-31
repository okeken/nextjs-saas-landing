import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@metallicjs/ui/lib/utils";

const cardVariants = cva(
  "bg-card text-card-foreground rounded-2xl border transition-shadow duration-150",
  {
    variants: {
      elevation: {
        none: "",
        sm: "shadow-sm",
        md: "shadow-[0_1px_2px_rgba(0,0,0,.05),0_8px_24px_rgba(0,0,0,.06)]",
        lg: "shadow-[0_1px_2px_rgba(0,0,0,.05),0_18px_50px_rgba(0,0,0,.12)]",
      },
      interactive: {
        false: "",
        true: "hover:shadow-[0_1px_2px_rgba(0,0,0,.05),0_12px_30px_rgba(0,0,0,.10)]",
      },
      padding: {
        none: "p-0",
        sm: "py-4",
        md: "py-6",
        lg: "py-8",
      },
      gap: {
        none: "gap-0",
        sm: "gap-4",
        md: "gap-6",
      },
    },
    defaultVariants: {
      elevation: "md",
      interactive: false,
      padding: "md",
      gap: "md",
    },
  }
);

type CardProps = React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants>;

function Card({
  className,
  elevation,
  interactive,
  padding,
  gap,
  ...props
}: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col",
        cardVariants({ elevation, interactive, padding, gap }),
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min items-start gap-1.5 px-6",
        // keep nice spacing when followed by a divider
        "[.border-b+&]:pt-6 [&+.border-b]:pb-6",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("justify-self-end self-start", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6", "[&.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
