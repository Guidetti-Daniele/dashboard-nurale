import type { Column } from "@tanstack/react-table";

export type FilterColumnInputProps<TData> = {
  column: Column<TData>;
};

export const FilterColumnInput = <TData,>({
  column,
}: FilterColumnInputProps<TData>) => {
  return <>{column.columnDef.meta?.filterComponentFunction(column)}</>;
};
