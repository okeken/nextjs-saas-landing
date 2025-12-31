"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@metallicjs/ui/lib/utils";

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  xxl: "max-w-2xl",
} as const;

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  hideClose?: boolean;
  titleClassName?: string;
  container?: HTMLElement | null;

  /** New: control accidental closes */
  closeOnOutside?: boolean; // default true
  closeOnEscape?: boolean; // default true
};

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  className,
  size = "md",
  hideClose,
  titleClassName,
  container,
  closeOnOutside = true,
  closeOnEscape = true,
}: ModalProps) {
  const [portalEl, setPortalEl] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
    if (container) return setPortalEl(container);
    const el = document.getElementById("ui-portal-root") ?? document.body;
    setPortalEl(el);
  }, [container]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal container={portalEl ?? undefined}>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-40 backdrop-blur-[20px] bg-overlay",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=open]:fade-in data-[state=closed]:fade-out"
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed z-50 left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2",
            "rounded-2xl border border-border bg-card text-card-foreground shadow-modal",
            "data-[state=open]:animate-in data-[state=open]:zoom-in-95 data-[state=open]:fade-in",
            "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95",
            sizeMap[size],
            className
          )}
          /* Prevent accidental close */
          onEscapeKeyDown={(e) => {
            if (!closeOnEscape) e.preventDefault();
          }}
          onPointerDownOutside={(e) => {
            if (!closeOnOutside) e.preventDefault();
          }}
          onInteractOutside={(e) => {
            if (!closeOnOutside) e.preventDefault();
          }}
        >
          {(title || !hideClose) && (
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <Dialog.Title
                className={cn(
                  "text-base font-semibold tracking-tight",
                  titleClassName
                )}
              >
                {title}
              </Dialog.Title>
              {!hideClose && (
                <Dialog.Close className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30">
                  <X className="size-4" aria-hidden />
                </Dialog.Close>
              )}
            </div>
          )}
          <div className="px-5 py-4">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
