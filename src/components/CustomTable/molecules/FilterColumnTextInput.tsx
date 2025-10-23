import { Input, type FilterColumnInputProps } from "@/components";

const FilterColumnTextInput = <TData,>({
  column,
}: FilterColumnInputProps<TData>) => {
  return (
    <Input
      type="text"
      placeholder={column.columnDef.header as string}
      value={(column.getFilterValue() as string) || ""}
      onChange={(event) => column.setFilterValue(event.target.value)}
    />
  );
};

export default FilterColumnTextInput;
