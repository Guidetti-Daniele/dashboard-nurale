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

import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  PaginationState,
} from "@tanstack/react-table";
import PaginationControls from "../molecules/CustomTable/PaginationControls";

type AllowedStates = {
  columnFilters: ColumnFiltersState;
  sorting: SortingState;
  pagination: PaginationState;
};
type AllowedStatesKeys = keyof AllowedStates;

type TableStates = Partial<{
  [state in AllowedStatesKeys]: AllowedStates[state];
}>;

type TableSetStates = Partial<{
  [state in AllowedStatesKeys as `on${Capitalize<state>}Changed`]: React.Dispatch<
    React.SetStateAction<AllowedStates[state]>
  >;
}>;

export type CustomTableProps<TData> = {
  columns: ColumnDef<TData>[];
  data: TData[];
  tableStates?: TableStates;
  tableSetStates?: TableSetStates;
  noResultsComp?: React.ReactNode;
};

const CustomTable = <TData,>({
  columns,
  data,
  tableStates = {},
  tableSetStates = {},
  noResultsComp = <NoResults />,
}: CustomTableProps<TData>) => {
  function isStateControlled(stateKey: AllowedStatesKeys) {
    return Object.keys(tableStates).includes(stateKey);
  }

  const table = useReactTable({
    columns,
    data,
    rowCount: data.length,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: isStateControlled("columnFilters")
      ? getFilteredRowModel()
      : undefined,
    getSortedRowModel: isStateControlled("sorting")
      ? getSortedRowModel()
      : undefined,
    getPaginationRowModel: isStateControlled("pagination")
      ? getPaginationRowModel()
      : undefined,
    // getPaginationRowModel: getPaginationRowModel(),

    state: { ...tableStates },
    ...tableSetStates,
  });

  const rows = table.getRowModel().rows;

  return (
    <div>
      {/* Rendering the table */}
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
      {isStateControlled("pagination") && (
        <PaginationControls
          table={table}
          setPagination={tableSetStates.onPaginationChanged!}
        />
      )}
    </div>
  );
};

export default CustomTable;
