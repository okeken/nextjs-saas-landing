"use client";

import { useState } from "react";

import { Button } from "@metallicjs/ui/components/button";
import { Modal } from "@metallicjs/ui/components/modal";
import { cn } from "@metallicjs/ui/lib/utils";

import { WarningIcon } from "./warningIcon";

interface RefundConfirmModalProps {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  onConfirm: () => Promise<void>;
  title: string;
  bodyText: string;
  modalIcon?: string;
  hasVariantColour?: boolean;
}

export default function ConfirmModal({
  open,
  onOpenChange,
  onConfirm,
  title,
  bodyText,
  hasVariantColour,
}: RefundConfirmModalProps) {
  const [submitting, setSubmitting] = useState(false);

  const handleConfirm = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await onConfirm();
      onOpenChange(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal title={title} open={open} onOpenChange={onOpenChange} size="md">
      <div className="space-y-6 text-center">
        <div className="flex items-center justify-center mx-auto">
          <WarningIcon
            className="w-14 h-14"
            circleClassName="text-destructive/30"
            strokeClassName="text-destructive"
            auraClassName="text-red-800"
            withAura
          />

          <span></span>
        </div>

        <h2 className="text-xl font-semibold">{bodyText}</h2>
        <p className="text-muted-foreground">This action cannot be reversed.</p>

        <div className="pt-2 space-y-3">
          <Button
            className={cn(
              "w-full rounded-lg py-2",
              hasVariantColour ? "bg-error-600" : "bg-destructive"
            )}
            onClick={handleConfirm}
            disabled={submitting}
            aria-busy={submitting}
          >
            {submitting ? "Processing…" : "Yes"}
          </Button>

          <Button
            fullWidth
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={submitting}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export { ConfirmModal };
