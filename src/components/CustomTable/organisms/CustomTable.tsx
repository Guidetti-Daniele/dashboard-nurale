import { useEffect, useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type Table as TableType,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableHeadContent,
  TableBodyNoResults,
  PaginationControls,
  FilterTableControls,
} from "@/components";

export type CustomTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
};

// TODO: transform in a context
export type TableControlProps<TData> = {
  table: TableType<TData>;
};

export const CustomTable = <TData,>({
  columns,
  data,
}: CustomTableProps<TData>) => {
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    columns,
    data,
    rowCount: data.length,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  const filteredRows = table.getFilteredRowModel().rows;
  const rows = table.getRowModel().rows;

  useEffect(() => {
    // Hiding columns set to hidden by default from the meta object of columnDef.
    table.getAllColumns().forEach((col) => {
      if (col.getCanHide() && col.columnDef.meta?.hidden)
        col.toggleVisibility(false);
    });
  }, []);

  useEffect(() => {
    // Calculating the number of pages needed to show the filtered data
    const { pageSize } = table.getState().pagination;
    const neededPages = Math.ceil(filteredRows.length / pageSize);

    table.setOptions((prev) => ({ ...prev, pageCount: neededPages }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredRows]);

  return (
    <div className="flex flex-col gap-5 overflow-auto">
      {/* Filter menu controls */}
      <FilterTableControls
        table={table}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />

      {/* Table */}
      <Table className="border">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  colSpan={header.colSpan}
                  className="border-x text-center"
                >
                  <TableHeadContent<TData> header={header} />
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length ? (
            rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableBodyNoResults colSpan={table.getAllFlatColumns().length} />
          )}
        </TableBody>
      </Table>

      {/* Pagination controls */}
      {table.getPageCount() ? <PaginationControls table={table} /> : null}
    </div>
  );
};
