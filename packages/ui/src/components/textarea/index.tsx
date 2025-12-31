"use client";
import * as React from "react";

import { cn } from "@metallicjs/ui/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
  autoGrow?: boolean;
  maxRows?: number; // optional cap
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      invalid,
      rows = 4,
      autoGrow = true,
      maxRows,
      onInput,
      style,
      ...props
    },
    ref
  ) => {
    const innerRef = React.useRef<HTMLTextAreaElement>(null);
    React.useImperativeHandle(
      ref,
      () => innerRef.current as HTMLTextAreaElement
    );

    const resize = React.useCallback(() => {
      const el = innerRef.current;
      if (!el) return;

      // allow shrink
      el.style.height = "0px";

      const cs = getComputedStyle(el);
      const border = el.offsetHeight - el.clientHeight; // borders
      let next = el.scrollHeight + border;

      if (maxRows) {
        const line = parseFloat(cs.lineHeight || "0");
        const pad =
          parseFloat(cs.paddingTop || "0") +
          parseFloat(cs.paddingBottom || "0");
        const cap = Math.floor(line * maxRows + pad + border);
        next = Math.min(next, cap);
        el.style.overflowY =
          next < el.scrollHeight + border ? "auto" : "hidden";
      } else {
        el.style.overflowY = "hidden";
      }

      el.style.height = `${next}px`;
    }, [maxRows]);

    // Run after paint so scrollHeight reflects the latest value
    React.useLayoutEffect(() => {
      if (autoGrow) resize();
    }, [autoGrow, props.value, resize]);

    return (
      <textarea
        ref={innerRef}
        data-slot="textarea"
        rows={rows}
        aria-invalid={invalid ? "true" : undefined}
        onInput={(e) => {
          if (autoGrow) resize();
          onInput?.(e);
        }}
        className={cn(
          // layout & tokens
          "w-full min-h-16 rounded-lg border border-input px-3 py-2",
          // type & placeholder
          "text-base md:text-sm text-foreground  placeholder:text-muted-foreground dark:placeholder:!text-muted-foreground/60 placeholder:font-light",
          // focus & states
          "outline-none shadow-xs transition-[color,box-shadow]",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "disabled:cursor-not-allowed disabled:opacity-50",
          // invalid styling
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          // growth behavior
          autoGrow ? "resize-none overflow-y-hidden" : "resize-y",
          className
        )}
        style={style}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
