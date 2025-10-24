import {
  GlobalFilterInput,
  ColumnFilterDropdown,
  type TableControlProps,
} from "@/components";

export interface FilterTableControlsProps<TData>
  extends TableControlProps<TData> {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterTableControls = <TData,>({
  table,
  globalFilter,
  setGlobalFilter,
}: FilterTableControlsProps<TData>) => {
  return (
    <>
      {/* Global Filter Input */}
      <GlobalFilterInput
        table={table}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      {/* Single Columns Filters */}
      <ColumnFilterDropdown table={table} />
    </>
  );
};
