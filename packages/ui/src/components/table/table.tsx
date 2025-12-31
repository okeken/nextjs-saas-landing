"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type SortingState,
  type PaginationState,
  type Updater,
  type RowSelectionState,
} from "@tanstack/react-table";
import { ArrowUpDown, MoreVertical, Plus, Trash2 } from "lucide-react";
import { useMemo, useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@metallicjs/ui/components/select";
import { cn } from "@metallicjs/ui/lib/utils";

import { Button } from "../button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import FilterButton from "../filter";
import SearchInput from "../search";
// ⬇️ Removed Input import
// import { Input } from "../input";
import { Checkbox } from "../checkbox";

interface HeaderAction {
  label: string;
  iconSrc?: string;
  onClick?: () => void;
  className?: string;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];

  onViewDetails?: (row: TData) => void;
  onCreate?: () => void;
  onEdit?: (row: TData) => void;
  onDelete?: (row: TData) => void;
  onBan?: (row: TData) => void;
  deleteText?: string;
  hasTableTitle?: boolean;
  hasTableFilter?: boolean;
  hasBillingType?: boolean;
  hasTransferAmount?: boolean;
  hasTransactionType?: boolean;
  hasEventType?: boolean;
  hasStatus?: boolean;
  tableTitle?: string;
  emptyTitle?: string;
  showUpAndDownArrows?: boolean;
  emptyDescription?: string;
  useExportButton?: boolean;
  useViewAll?: boolean;
  hasDownload?: (row: TData) => void;
  hasAddToStarred?: (row: TData) => void;
  hasRenamed?: (row: TData) => void;
  hasShared?: (row: TData) => void;
  hasMoreInfo?: (row: TData) => void;
  regenerateApiKey?: (row: TData) => void;
  setAsDefault?: (row: TData) => void;
  headerAction?: HeaderAction;
  onRowClick?: (row: TData) => void;
  hasCreateButton?: boolean;
  createButtonText?: string;
  onFilterApply?: (filters: {
    statuses: string[];
    transactionTypes: string[];
    startDate?: Date;
    endDate?: Date;
  }) => void;

  pagination?: PaginationState;
  setPagination?: React.Dispatch<React.SetStateAction<PaginationState>>;
  rowCount?: number;
  isPending?: boolean;

  enableMultiSelect?: boolean;
  onBulkDelete?: (rows: TData[]) => void;
  onSelectionChange?: (rows: TData[]) => void;
}

export function DataTable<TData extends object, TValue>({
  columns,
  data,
  onViewDetails,
  onEdit,
  onDelete,
  onCreate,
  hasCreateButton,
  createButtonText,
  hasTableTitle,
  tableTitle,
  hasTableFilter,
  hasBillingType,
  hasTransactionType,
  hasTransferAmount,
  emptyTitle,
  emptyDescription,
  useExportButton,
  useViewAll,
  hasEventType,
  headerAction,
  hasDownload,
  hasRenamed,
  hasShared,
  hasAddToStarred,
  hasMoreInfo,
  hasStatus,
  showUpAndDownArrows,
  onRowClick,
  onFilterApply,
  deleteText = "Delete",
  onBan,
  pagination,
  setPagination,
  rowCount,
  isPending = true,
  setAsDefault,
  regenerateApiKey,

  enableMultiSelect = false,
  onBulkDelete,
  onSelectionChange,
}: DataTableProps<TData, TValue>) {
  const [sorting] = useState<SortingState>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  // Selection state
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const hasRowActions = !!(onViewDetails || onEdit || onDelete);
  const actionsColumn: ColumnDef<TData, unknown> = {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 p-0 cursor-pointer"
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="cursor-pointer">
          {onViewDetails && (
            <DropdownMenuItem onClick={() => onViewDetails(row.original)}>
              View&nbsp;Details
            </DropdownMenuItem>
          )}
          {hasDownload && (
            <DropdownMenuItem onClick={() => hasDownload(row.original)}>
              Download
            </DropdownMenuItem>
          )}
          {hasAddToStarred && (
            <DropdownMenuItem onClick={() => hasAddToStarred(row.original)}>
              Add To Starred
            </DropdownMenuItem>
          )}
          {HasIf(hasRenamed) && (
            <DropdownMenuItem onClick={() => hasRenamed!(row.original)}>
              Rename
            </DropdownMenuItem>
          )}
          {hasShared && (
            <DropdownMenuItem onClick={() => hasShared(row.original)}>
              Share
            </DropdownMenuItem>
          )}
          {hasMoreInfo && (
            <DropdownMenuItem onClick={() => hasMoreInfo(row.original)}>
              More Information
            </DropdownMenuItem>
          )}
          {onEdit && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onEdit(row.original);
              }}
              className="cursor-pointer"
            >
              Edit
            </DropdownMenuItem>
          )}
          {onBan && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onBan(row.original);
              }}
              variant="destructive"
              className="cursor-pointer"
            >
              Ban
            </DropdownMenuItem>
          )}
          {setAsDefault && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setAsDefault(row.original);
              }}
              className="cursor-pointer"
            >
              Set as Default
            </DropdownMenuItem>
          )}
          {regenerateApiKey && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                regenerateApiKey(row.original);
              }}
              className="cursor-pointer"
            >
              Regenerate Key
            </DropdownMenuItem>
          )}
          {onDelete && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                onDelete(row.original);
              }}
              variant="destructive"
              className="cursor-pointer"
            >
              {deleteText}
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  };

  const selectionColumn: ColumnDef<TData, unknown> = {
    id: "__select",
    header: ({ table }) => {
      const allPageSelected = table.getIsAllPageRowsSelected();
      const somePageSelected = table.getIsSomePageRowsSelected();

      const checked: boolean | "indeterminate" = allPageSelected
        ? true
        : somePageSelected
        ? "indeterminate"
        : false;

      return (
        <>
          <Checkbox
            aria-label="Select all rows on this page"
            className="border-background size-5"
            checked={checked}
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(Boolean(value))
            }
            onClick={(e) => e.stopPropagation()}
          />
        </>
      );
    },
    cell: ({ row }) => {
      const isSelected = row.getIsSelected();
      const isSome = row.getIsSomeSelected?.() ?? false;

      const checked: boolean | "indeterminate" = isSelected
        ? true
        : isSome
        ? "indeterminate"
        : false;

      return (
        <Checkbox
          aria-label="Select row"
          className="size-5"
          checked={checked}
          onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
          onClick={(e) => e.stopPropagation()}
        />
      );
    },
    size: 30,
    enableSorting: false,
    enableHiding: false,
  };

  const tableColumns: ColumnDef<TData, TValue>[] = [
    ...(enableMultiSelect
      ? ([selectionColumn] as unknown as ColumnDef<TData, TValue>[])
      : []),
    ...columns,
    ...(hasRowActions
      ? ([actionsColumn] as unknown as ColumnDef<TData, TValue>[])
      : []),
  ];

  const isServerMode =
    pagination != null &&
    typeof setPagination === "function" &&
    typeof rowCount === "number";

  const pageCount = useMemo(() => {
    if (!isServerMode) return undefined;
    const size = Math.max(1, pagination!.pageSize || 10);
    const total = Math.max(0, rowCount!);
    return Math.max(1, Math.ceil(total / size));
  }, [isServerMode, pagination, rowCount]);

  const table = useReactTable({
    data,
    columns: tableColumns,
    ...(isServerMode
      ? {
          state: { pagination: pagination!, rowSelection },
          manualPagination: true,
          pageCount,
          onPaginationChange: (updater: Updater<PaginationState>) => {
            (
              setPagination as React.Dispatch<
                React.SetStateAction<PaginationState>
              >
            )((prev) =>
              typeof updater === "function" ? updater(prev) : updater
            );
          },
        }
      : {
          state: { rowSelection },
        }),
    enableRowSelection: enableMultiSelect,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    if (!onSelectionChange) return;
    onSelectionChange(table.getSelectedRowModel().rows.map((r) => r.original));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection]);

  const PAGE_SIZES = [5, 10, 20, 50];
  const safePageSize =
    isServerMode && PAGE_SIZES.includes(pagination!.pageSize)
      ? pagination!.pageSize
      : PAGE_SIZES[0];

  const hasData = (data?.length ?? 0) > 0;
  const total = Math.max(0, rowCount ?? 0);
  const minPageSize = 5;
  const multiplePages = (pageCount ?? 1) > 1;

  const shouldShowFooter =
    isServerMode && hasData && (multiplePages || total > minPageSize);

  const selectedRows = table.getSelectedRowModel().rows.map((r) => r.original);
  const hasSelection = enableMultiSelect && selectedRows.length > 0;

  const handleBulkDelete = async () => {
    if (!hasSelection) return;
    if (onBulkDelete) {
      onBulkDelete(selectedRows);
    } else if (onDelete) {
      for (const r of selectedRows) {
        await Promise.resolve(onDelete(r));
      }
    }
    table.resetRowSelection();
  };

  return (
    <div className="overflow-hidden border rounded-xl bg-background">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b bg-muted/20">
        {hasTableTitle ? (
          <h4 className="text-[1rem] font-semibold text-primary">
            {tableTitle}
          </h4>
        ) : (
          <SearchInput
            onSearch={(q) => console.log("search:", q)}
            placeholder="Search"
          />
        )}

        <div className="flex items-center gap-2">
          {hasTableFilter && (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 px-3 cursor-pointer h-9"
              onClick={() => setFilterOpen(true)}
            >
              <img
                src="/assets/dashboard/filter.png"
                alt=""
                width={24}
                height={24}
              />
              Filter
            </Button>
          )}

          {hasCreateButton && (
            <Button
              className="flex items-center gap-2 text-white cursor-pointer bg-primary"
              onClick={() => onCreate?.()}
            >
              <Plus className="w-4 h-4" />
              {createButtonText}
            </Button>
          )}

          {headerAction && (
            <Button
              onClick={headerAction.onClick}
              className={cn(
                "flex items-center gap-2 bg-primary text-white cursor-pointer",
                headerAction.className
              )}
            >
              {headerAction.iconSrc && (
                <img src={headerAction.iconSrc} alt="" width={16} height={16} />
              )}
              {headerAction.label}
            </Button>
          )}
        </div>
      </div>

      {/* Batch actions bar */}
      {hasSelection && (
        <div className="flex items-center justify-between gap-3 px-4 py-2 border-b bg-muted/10">
          <div className="text-sm">
            <span className="font-medium">{selectedRows.length}</span> selected
          </div>
          <div className="flex items-center gap-2">
            {(onBulkDelete || onDelete) && (
              <Button
                variant="destructive"
                size="sm"
                className="h-9"
                onClick={handleBulkDelete}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                {deleteText}
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              className="h-9"
              onClick={() => table.resetRowSelection()}
            >
              Clear
            </Button>
          </div>
        </div>
      )}

      {/* Table / Empty */}
      {data?.length ? (
        <table className="w-full text-sm">
          <thead className="bg-muted/40">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id} className="border-b">
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 font-medium text-left text-muted-foreground"
                  >
                    {header.isPlaceholder ? null : (
                      <div
                        className={cn(
                          "flex items-center gap-1",
                          header.column.getCanSort() &&
                            "cursor-pointer select-none"
                        )}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && showUpAndDownArrows && (
                          <ArrowUpDown className="w-4 h-4" />
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b cursor-pointer h-14 hover:bg-muted/10"
                onClick={() => onRowClick?.(row.original)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-4 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : isPending ? (
        <div className="flex items-center justify-center min-h-32">
          Fetching Data Please Wait
        </div>
      ) : (
        <div className="py-20 space-y-2 text-center">
          <img
            src="/assets/dashboard/empty-icon.png"
            alt=""
            width={40}
            height={40}
            className="mx-auto opacity-60"
          />
          <h3 className="font-semibold">{emptyTitle || "No Data"}</h3>
          <p className="max-w-sm mx-auto text-sm text-muted-foreground">
            {emptyDescription || "Nothing has been added yet."}
          </p>
        </div>
      )}

      {shouldShowFooter && (
        <div className="flex flex-col gap-4 px-4 py-3 space-x-6 border-t sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {buildPageItems(pagination!.pageIndex, pageCount!).map((it, i) =>
                it === "…" ? (
                  <span key={`dots-${i}`} className="px-2 select-none">
                    …
                  </span>
                ) : (
                  <Button
                    key={it}
                    variant={
                      pagination!.pageIndex + 1 === it ? "default" : "outline"
                    }
                    size="sm"
                    className="w-8 h-8 p-0 mx-1"
                    aria-current={
                      pagination!.pageIndex + 1 === it ? "page" : undefined
                    }
                    onClick={() => {
                      if (pagination!.pageIndex + 1 !== it) {
                        setPagination!((prev) => ({
                          ...prev,
                          pageIndex: it - 1,
                        }));
                      }
                    }}
                  >
                    {it}
                  </Button>
                )
              )}
            </div>

            <div className="text-sm text-muted-foreground">
              {typeof rowCount === "number" ? (
                (() => {
                  const { start, end } = formatRange(
                    pagination!.pageIndex,
                    pagination!.pageSize,
                    rowCount
                  );
                  return (
                    <span>
                      Showing <span className="font-medium">{start}</span>–
                      <span className="font-medium">{end}</span> of{" "}
                      <span className="font-medium">{rowCount}</span>
                    </span>
                  );
                })()
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          </div>

          <div className="flex items-center ">
            <div className="flex items-center gap-3 text-sm">
              <span>Number of Display:</span>
              <Select
                value={String(safePageSize)}
                onValueChange={(v) => {
                  const n = parseInt(v, 10);
                  (
                    setPagination as React.Dispatch<
                      React.SetStateAction<PaginationState>
                    >
                  )((prev) => ({
                    ...prev,
                    pageSize: n,
                    pageIndex: 0,
                  }));
                }}
              >
                <SelectTrigger className="w-[90px] h-8">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {([5, 10, 20, 50] as const).map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center gap-2 ml-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
                className="h-9"
              >
                ‹ Previous
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
                className="h-9"
              >
                Next ›
              </Button>
            </div>
          </div>
        </div>
      )}

      <FilterButton
        open={filterOpen}
        onOpenChange={setFilterOpen}
        hasTransferAmount={hasTransferAmount}
        hasStatus={hasStatus}
        hasEventType={hasEventType}
        hasBillingType={hasBillingType}
        hasTransactionType={hasTransactionType}
        onApply={(filters) => onFilterApply?.(filters)}
      />
    </div>
  );
}

function buildPageItems(pageIndex: number, pageCount: number, max = 7) {
  const current = pageIndex + 1;
  if (pageCount <= max)
    return Array.from({ length: pageCount }, (_, i) => i + 1);

  const items: (number | "…")[] = [];
  const first = 1;
  const last = pageCount;

  const left = Math.max(first + 1, current - 1);
  const right = Math.min(last - 1, current + 1);

  items.push(first);

  if (left > first + 1) items.push("…");

  for (let p = left; p <= right; p++) items.push(p);

  if (right < last - 1) items.push("…");

  items.push(last);

  if (!items.includes(current)) {
    if (current === first + 1) items.splice(1, 0, current);
    else if (current === last - 1) items.splice(items.length - 1, 0, current);
  }

  const dedup: (number | "…")[] = [];
  for (const it of items) {
    if (dedup.length && dedup[dedup.length - 1] === it) continue;
    dedup.push(it);
  }
  return dedup;
}

function formatRange(pageIndex: number, pageSize: number, total: number) {
  const start = total === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, total);
  return { start, end };
}

// Small helper to keep TS happy for optional callbacks
function HasIf<T extends (...args: any[]) => any>(fn?: T): fn is T {
  return typeof fn === "function";
}
