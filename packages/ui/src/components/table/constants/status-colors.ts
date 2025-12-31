export const STATUS_COLOR_MAP: Record<string, string> = {
  Successful: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Failed: "bg-red-100 text-red-700",
  Disputed: "bg-purple-100 text-purple-700",
  Refunded: "bg-blue-100 text-blue-700",
} as const;

/** Helper function to avoid repeating the fallback logic */
export const getStatusColor = (status: string, override?: string) =>
  override ?? STATUS_COLOR_MAP[status] ?? "bg-slate-100 text-slate-800";
