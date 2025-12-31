"use client";

import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@metallicjs/ui/lib/utils";

// ---------------------------------------------------------------------
// Styles: Toggle (CVA)
// - Uses data-[state=on] for selected item
// - Uses focus-visible for keyboard focus ring and optional bg
// - Variants: default | outline | ghost
// - Sizes: sm | default | lg
// ---------------------------------------------------------------------
const toggleVariants = cva(
  [
    "inline-flex select-none items-center justify-center whitespace-nowrap",
    "transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
    "px-3 py-2 text-sm",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "focus-visible:ring-offset-background",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-transparent text-foreground",
          "hover:bg-accent",
          // Selected (on)
          "data-[state=on]:bg-surface-1",
        ].join(" "),
        outline: [
          "border border-input bg-transparent text-foreground",
          "hover:bg-accent",
          // Selected (on)
          "data-[state=on]:bg-accent data-[state=on]:text-foreground",
        ].join(" "),
        ghost: [
          "bg-transparent text-foreground",
          "hover:bg-accent",
          // Selected (on)
          "data-[state=on]:bg-accent data-[state=on]:text-foreground",
        ].join(" "),
      },
      size: {
        sm: "h-8 text-xs",
        default: "h-9 text-sm",
        lg: "h-10 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ToggleCVAProps = VariantProps<typeof toggleVariants>;
const ToggleGroupContext = React.createContext<ToggleCVAProps>({
  size: "default",
  variant: "default",
});

type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  ToggleCVAProps;

function ToggleGroup({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: ToggleGroupProps) {
  return (
    <div className="bg-surface-3 p-1 rounded-md dark:border dark:p-2">
      <ToggleGroupPrimitive.Root
        data-slot="toggle-group"
        data-variant={variant}
        data-size={size}
        className={cn(
          "group/toggle-group flex w-fit items-center rounded-md",
          "data-[variant=outline]:shadow-xs bg-surface-3",
          className
        )}
        {...props}
      >
        <ToggleGroupContext.Provider value={{ variant, size }}>
          {children}
        </ToggleGroupContext.Provider>
      </ToggleGroupPrimitive.Root>
    </div>
  );
}

type ToggleGroupItemProps = React.ComponentProps<
  typeof ToggleGroupPrimitive.Item
> &
  ToggleCVAProps;

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: ToggleGroupItemProps) {
  const ctx = React.useContext(ToggleGroupContext);
  const resolvedVariant = ctx.variant ?? variant ?? "default";
  const resolvedSize = ctx.size ?? size ?? "default";

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={resolvedVariant}
      data-size={resolvedSize}
      className={cn(
        toggleVariants({ variant: resolvedVariant, size: resolvedSize }),
        // Grouped-button edge handling
        "min-w-0 flex-1 shrink-0 rounded-md first:rounded-l-md last:rounded-r-md shadow-none focus:z-10 focus-visible:z-10",
        // Remove inner borders except the first when outline variant
        "data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        // Optional: make focus also tint bg slightly (nice in dark mode)
        "focus-visible:bg-accent cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem, toggleVariants };
