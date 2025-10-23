import type { Column } from "@tanstack/react-table";

export type FilterColumnInputProps<TData> = {
  column: Column<TData>;
  //  tab: number;
};

//const PADDING_LEFT = 10;
// <div className={`ml-[${PADDING_LEFT * tab}px]`}>
//   </div>

const FilterColumnInput = <TData,>({
  column,
}: FilterColumnInputProps<TData>) => {
  return <>{column.columnDef.meta?.filterComponentFunction(column)}</>;
};

export default FilterColumnInput;
