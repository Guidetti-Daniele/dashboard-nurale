import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
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

import { cn } from "@/lib/utils";

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
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getCoreRowModel().rows;

  return (
    <Table className="border w-full overflow-scroll">
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                colSpan={header.colSpan}
                className="border-x text-center"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          : noResultsComp}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
