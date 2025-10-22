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

  console.log(table.getHeaderGroups());

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {flexRender(
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
                  <TableCell>
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
