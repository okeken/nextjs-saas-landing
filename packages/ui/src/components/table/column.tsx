"use client";

import { ColumnDef } from "@tanstack/react-table";

import { AuditLog } from "../../../../../apps/web/app/dashboard/audit-log/audit-log-types";
import { Order } from "../../../../../apps/web/app/dashboard/billings/orders/order-types";
import { Plan } from "../../../../../apps/web/app/dashboard/billings/plan/plan-types";
import { EmailProvider } from "../../../../../apps/web/app/dashboard/integrations/email/email-provider-types";
import { OauthProvider } from "../../../../../apps/web/app/dashboard/integrations/oauth-login-provider/oauth-login-provider-types";
import { PaymentSetup } from "../../../../../apps/web/app/dashboard/integrations/payment-setup/payment-setup-types";
import { MediaItem } from "../../../../../apps/web/app/dashboard/media/media-types";
import {
  Permission,
  Role,
} from "../../../../../apps/web/app/dashboard/role/role-types";
import { BackupItem } from "../../../../../apps/web/app/dashboard/settings/general/components/backup-recovery/backup-recovery-types";
import { SecurityLog } from "../../../../../apps/web/app/dashboard/settings/security/@security/security-logs/security-log-types";
import {
  AuditEntry,
  Member,
  Team,
} from "../../../../../apps/web/app/dashboard/team/shared/team-types";
import { User } from "../../../../../apps/web/app/dashboard/users/user-type";
import { Badge } from "../badge";
import { Switch } from "../switch";

export type Transaction = {
  user: string | { name: string; username?: string; avatar?: string };
  transactionId: string;
  amount: string;
  provider: string;
  date: string;
  status: string;

  /* extra fields shown in the details modal (optional) */
  type?: string;
  sessionId?: string;
  time?: string;
  paymentMethod?: string;
  number?: string;
  network?: string;
};

export type TeamColumnsType = Team;

/* ───── Shared status-pill cell helper ───── */
const statusCell =
  <T extends { status: string }>() =>
  ({ row }: { row: { getValue: (k: string) => string } }) => {
    const status = row.getValue("status") as string;
    const colors: Record<string, string> = {
      Successful: "bg-green-100 text-green-700",
      Pending: "bg-yellow-100 text-yellow-700",
      Failed: "bg-red-100 text-red-700",
      Disputed: "bg-purple-100 text-purple-700",
      Refunded: "bg-blue-100 text-blue-700",
    };
    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${
          colors[status] || ""
        }`}
      >
        {status}
      </span>
    );
  };

export const orderColumns: ColumnDef<Order, unknown>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const u = row.original.user as
        | string
        | { name: string; username?: string; avatar?: string };

      if (typeof u === "string") return u;

      return (
        <div className="flex items-center gap-2">
          {u.avatar && (
            <img
              src={u.avatar}
              alt={u.name}
              className="w-6 h-6 rounded-full shrink-0"
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">{u.name}</span>
            {u.username && (
              <span className="text-xs text-muted-foreground">
                @{u.username}
              </span>
            )}
          </div>
        </div>
      );
    },
  },
  { accessorKey: "totalAmount", header: "Total Amount" },
  { accessorKey: "discountedAmount", header: "Total Amount After Discount" },
  { accessorKey: "discount", header: "Total Discount Amount" },
  { accessorKey: "provider", header: "Payment Provider" },
  { accessorKey: "createdAt", header: "Created At" },
  { accessorKey: "status", header: "Status", cell: statusCell<Order>() },
];

export const transactionColumns: ColumnDef<Transaction, unknown>[] = [
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const u = row.original.user as
        | string
        | { name: string; username?: string; avatar?: string };

      if (typeof u === "string") return u;

      return (
        <div className="flex items-center gap-2">
          {u.avatar && (
            <img
              src={u.avatar}
              alt={u.name}
              className="w-6 h-6 rounded-full shrink-0"
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">{u.name}</span>
            {u.username && (
              <span className="text-xs text-muted-foreground">
                @{u.username}
              </span>
            )}
          </div>
        </div>
      );
    },
  },
  { accessorKey: "transactionId", header: "Transaction ID" },
  { accessorKey: "amount", header: "Amount" },
  { accessorKey: "provider", header: "Payment Provider" },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "status", header: "Status", cell: statusCell<Transaction>() },
];

export const memberColumns: ColumnDef<Member, unknown>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => row.original.name ?? "NIL",
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => row.original.email ?? "NIL",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => row.original.role.name ?? "NIL",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const s = row.original.status;
      const cls =
        s === "ACTIVE"
          ? "bg-green-100 text-green-800"
          : s === "INACTIVE"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-red-100 text-red-700";

      return (
        <Badge variant="outline" className={cls}>
          {s}
        </Badge>
      );
    },
  },
];

export const auditColumns: ColumnDef<AuditEntry, unknown>[] = [
  { accessorKey: "event", header: "Event Type" },
  { accessorKey: "date", header: "Date" },
];

export const auditLogColumns: ColumnDef<AuditLog, unknown>[] = [
  { accessorKey: "user", header: "User" },
  { accessorKey: "eventType", header: "Event Type" },
  { accessorKey: "date", header: "Date" },
];

export const securityLogColumns: ColumnDef<SecurityLog, unknown>[] = [
  { accessorKey: "eventType", header: "Event Type" },
  { accessorKey: "date", header: "Date" },
];

export const planColumns: ColumnDef<Plan, unknown>[] = [
  { accessorKey: "title", header: "Plan Title" },
  { accessorKey: "planId", header: "Plan ID" },
  { accessorKey: "billing", header: "Billing Type" },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => `$${row.original.amount}`,
  },
  { accessorKey: "date", header: "Date Created" },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const s = row.original.status;
      const cls =
        s === "Published"
          ? "bg-green-100 text-green-800"
          : s === "Draft"
          ? "bg-yellow-100 text-yellow-800"
          : "bg-red-100 text-red-700";
      return (
        <Badge variant="outline" className={cls}>
          {s}
        </Badge>
      );
    },
  },
];

export const permissionColumns: ColumnDef<Permission, unknown>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "action", header: "Action" },
  { accessorKey: "resources", header: "Resources" },
  { accessorKey: "orgId", header: "Org ID" },
];

export const userColumns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: "user",
    header: "Name",
    cell: ({ row }) => {
      const u = row.original.user as
        | string
        | { name: string; username?: string; avatar?: string };

      if (typeof u === "string") return u;

      return (
        <div className="flex items-center gap-2">
          {u.avatar && (
            <img
              src={u.avatar}
              alt={u.name}
              className="w-6 h-6 rounded-full shrink-0"
            />
          )}
          <div className="flex flex-col">
            <span className="font-medium">{u.name}</span>
            {u.username && (
              <span className="text-xs text-muted-foreground">
                @{u.username}
              </span>
            )}
          </div>
        </div>
      );
    },
  },
  { accessorKey: "email", header: "Email Address" },
  { accessorKey: "status", header: "Status", cell: statusCell<User>() },
];

export const mediaColumns: ColumnDef<MediaItem>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const item = row.original;
      const getIcon = () => {
        if (item.type === "folder") return "/assets/dashboard/folder.png";
        if (item.type === "pdf") return "/assets/dashboard/PDF.png";
        if (item.type === "image" && item.src) return item.src;
        return;
      };
      return (
        <div className="flex items-center gap-3">
          <img
            src={getIcon()}
            alt={item.name}
            width={28}
            height={28}
            className="object-cover rounded"
          />
          <span>{item.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => row.original.size || "—",
  },
  {
    accessorKey: "access",
    header: "Access",
    cell: ({ row }) => row.original.access || "—",
  },
  {
    accessorKey: "modified",
    header: "Modified",
    cell: ({ row }) => row.original.modified || "—",
  },
];

export const backupColumns: ColumnDef<BackupItem>[] = [
  { accessorKey: "date", header: "Date" },
  { accessorKey: "type", header: "Type" },
  { accessorKey: "size", header: "Size" },
  { accessorKey: "createdBy", header: "Created By" },
];

export const oauthLoginProviderColumns = (
  onToggle: (id: string, checked: boolean) => void
): ColumnDef<OauthProvider>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "providerName",
    header: "Provider Name",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const provider = row.original;

      return (
        <Switch
          className={`${
            provider.enabled ? "bg-green-600" : "bg-[var(--background-primary)]" // ← your custom background when false
          } data-[state=unchecked]:bg-[var(--background-primary)]`}
          checked={provider.enabled}
          onCheckedChange={(checked) => onToggle(provider.id, checked)}
        />
      );
    },
  },
];

export const paymentSetupColumns = (
  onToggle: (id: string, checked: boolean) => void
): ColumnDef<PaymentSetup>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    id: "action",
    header: "Action",
    cell: ({ row }) => {
      const provider = row.original;

      return (
        <Switch
          className={`${
            provider.enabled ? "bg-green-600" : "bg-[var(--background-primary)]" // ← your custom background when false
          } data-[state=unchecked]:bg-[var(--background-primary)]`}
          checked={provider.enabled}
          onCheckedChange={(checked) => onToggle(provider.id, checked)}
        />
      );
    },
  },
];
