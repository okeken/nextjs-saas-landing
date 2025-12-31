"use client";

import { Modal } from "../modal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "../sheet";
import { Badge } from "../badge";
import { getStatusColor } from "./constants/status-colors";
import { DetailItem } from "@/components/table/table-type";

export type DrawerVariant = "modal" | "drawer";

export interface GenericDetailsModalProps<T> {
  open: boolean;
  onOpenChange: (o: boolean) => void;

  variant?: DrawerVariant; //(default = 'modal')

  title?: string;
  user?: { name: string; username?: string; avatar?: string };
  details: DetailItem[];
  status?: { text: string; color?: string };
  showRefund?: boolean;
  onRefund?: () => void;
  refundButtonText?: string;

  /* data (optional) */
  data?: T | null;
}

function Body({
  user,
  details,
  status,
  showRefund,
  onRefund,
  refundButtonText = "Refund",
  onClose,
}: {
  user?: GenericDetailsModalProps<unknown>["user"];
  details: DetailItem[];
  status?: GenericDetailsModalProps<unknown>["status"];
  showRefund?: boolean;
  onRefund?: () => void;
  refundButtonText?: string;
  onClose: () => void;
}) {
  // const hasRefund = !!showRefund && !!onRefund;

  return (
    <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-2">
      {user && (
        <div className="flex items-center gap-3 border-b pb-3">
          {user.avatar && (
            <img
              src={user.avatar}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <h4 className="font-semibold">{user.name}</h4>
            {user.username && (
              <p className="text-sm text-muted-foreground">@{user.username}</p>
            )}
          </div>
        </div>
      )}

      <div className="gap-y-6 text-sm">
        {details.map((d, i) => (
          <div key={i} className={d.fullRow ? "col-span-2" : "py-2"}>
            <p className="font-medium text-slate-800 mb-1">{d.label}</p>
            <p className="text-muted-foreground">
              {d.value ?? <span className="italic">—</span>}
            </p>
          </div>
        ))}

        {status && (
          <div className="col-span-2">
            <p className="font-medium text-slate-800 mb-1 text-sm">Status</p>
            <Badge
              variant="outline"
              className={getStatusColor(status.text, status.color)}
            >
              {status.text}
            </Badge>
          </div>
        )}
      </div>

      <div className="flex gap-2 justify-end pt-4 border-t">
        <button
          onClick={onClose}
          className={`cursor-pointer rounded-lg py-2 border border-gray-300
          ${onRefund ? "w-full" : "w-40 ml-auto"}`}
        >
          Close
        </button>

        {onRefund && (
          <button
            className="w-full flex items-center justify-center gap-2 bg-[#7C0A02] text-white rounded-lg py-2 cursor-pointer"
            onClick={() => {
              onRefund?.();
              onClose();
            }}
          >
            <img
              src="/assets/dashboard/edit.png"
              width="16"
              height="16"
              alt="editIcon"
            />
            {refundButtonText}
          </button>
        )}
      </div>
    </div>
  );
}

export default function TransactionDetailsModal<T>({
  open,
  onOpenChange,
  variant = "modal" /* ⇠ choose: 'modal' | 'drawer' */,
  title = "Details",
  user,
  details,
  status,
  showRefund,
  onRefund,
  refundButtonText,
}: GenericDetailsModalProps<T>) {
  if (!open) return null;

  /* -------- drawer variant (right‑hand slide‑in) -------- */
  if (variant === "drawer") {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="right" className="max-w-md w-full">
          <SheetHeader className="border-b pb-4 mb-4">
            <SheetTitle>{title}</SheetTitle>
            <SheetClose asChild>
              {/* Sheet provides its own close button; keep UX consistent */}
              <button onClick={() => onOpenChange(false)} />
            </SheetClose>
          </SheetHeader>
          <div className="pl-4">
            <Body
              user={user}
              details={details}
              status={status}
              showRefund={showRefund}
              onRefund={onRefund}
              refundButtonText={refundButtonText}
              onClose={() => onOpenChange(false)}
            />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  /* -------- classic centred modal (default) -------- */
  return (
    <Modal open={open} onOpenChange={onOpenChange} title={title} size="lg">
      <Body
        user={user}
        details={details}
        status={status}
        showRefund={showRefund}
        onRefund={onRefund}
        refundButtonText={refundButtonText}
        onClose={() => onOpenChange(false)}
      />
    </Modal>
  );
}
