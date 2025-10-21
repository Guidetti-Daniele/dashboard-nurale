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
  TableHeader,
  TableRow,
} from "../ui/table";
import NoResults from "../molecules/CustomTable/NoResults";

type CustomTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  noResultsComp: React.ReactNode;
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
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableCell>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {rows.length
          ? rows.map((row) => (
              <TableRow id={row.id}>
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
