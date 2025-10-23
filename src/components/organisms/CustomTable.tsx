import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

import NoResults from "../molecules/CustomTable/NoResults";
import PaginationControls from "../molecules/CustomTable/PaginationControls";
import TableHeadContent from "../molecules/CustomTable/TableHeadContent";

import type { ColumnDef } from "@tanstack/react-table";

export type CustomTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  noResultsComp?: React.ReactNode;
};

const CustomTable = <TData,>({
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
    <div>
      {/* Rendering the table */}
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

      {/* Rendering the pagination controls */}
      <PaginationControls table={table} />
    </div>
  );
};

export default CustomTable;
