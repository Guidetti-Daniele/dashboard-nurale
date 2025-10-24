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
  NoResults,
  TableHeadContent,
  PaginationControls,
  FilterTableControls,
} from "@/components";

export type CustomTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  noResultsComp?: React.ReactNode;
};

export type CustomTableControlProps<TData> = {
  table: TableType<TData>;
};

export const CustomTable = <TData,>({
  columns,
  data,
  noResultsComp = <NoResults />,
}: CustomTableProps<TData>) => {
  const table = useReactTable({
    columns,
    data,
    rowCount: data.length,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="flex flex-col gap-5">
      {/* Filter menu controls */}
      <FilterTableControls table={table} />

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
          {rows.length
            ? rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            : noResultsComp}
        </TableBody>
      </Table>

      {/* Pagination controls */}
      <PaginationControls table={table} />
    </div>
  );
};
