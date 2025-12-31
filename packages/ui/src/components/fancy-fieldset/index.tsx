"use client";

import * as React from "react";

import { cn } from "@metallicjs/ui/lib/utils";

type LegendVariant = "pill" | "hairline" | "compact";
type Density = "comfortable" | "compact";

type FieldsetProps = {
  id?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  /** Legend visual style */
  variant?: LegendVariant;
  /** Vertical padding/spacing inside the fieldset body */
  density?: Density;
};

export function FancyFieldset({
  id,
  title,
  description,
  children,
  className,
  variant = "pill",
  density = "comfortable",
}: FieldsetProps) {
  const bodyGap = density === "compact" ? "gap-4" : "gap-6";
  const bodyPad = density === "compact" ? "p-4" : "p-6";

  return (
    <fieldset
      aria-describedby={description ? `${id}-desc` : undefined}
      className={cn(
        // Card-ish container using your design tokens
        "relative rounded-2xl border bg-card/50 shadow-sm",
        // Focus ring when any field inside is focused
        "focus-within:border-primary/60 focus-within:ring-2 focus-within:ring-primary/20",
        className
      )}
    >
      <Legend title={title} variant={variant} />
      {description ? (
        <p
          id={`${id}-desc`}
          className={cn(
            "text-xs text-muted-foreground",
            // keep description tidy below legend
            variant === "hairline" ? "mt-3 px-4" : "mt-2 px-4"
          )}
        >
          {description}
        </p>
      ) : null}

      <div className={cn("grid", bodyGap, bodyPad)}>{children}</div>
    </fieldset>
  );
}

function Legend({ title, variant }: { title: string; variant: LegendVariant }) {
  if (variant === "pill") {
    return (
      <legend
        className={cn(
          "mx-4 -mt-3 inline-flex items-center rounded-full border bg-background px-3 py-1",
          "text-[11px] font-medium tracking-wide text-muted-foreground",
          // subtle shadow so the pill sits above the border
          "shadow-sm"
        )}
      >
        {title}
      </legend>
    );
  }

  if (variant === "hairline") {
    // Gradient hairline that spans full width with a small label
    return (
      <legend
        className={cn(
          "relative mx-0 block px-4 pt-3",
          "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
        )}
      >
        <span className="relative z-10 bg-transparent">{title}</span>
        {/* gradient hairline */}
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 top-full block h-px",
            "bg-gradient-to-r from-primary/40 via-primary/10 to-accent/40"
          )}
        />
      </legend>
    );
  }

  // compact: minimal badge-like label, tighter space
  return (
    <legend
      className={cn(
        "mx-3 -mt-2 inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5",
        "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground"
      )}
    >
      {title}
    </legend>
  );
}
