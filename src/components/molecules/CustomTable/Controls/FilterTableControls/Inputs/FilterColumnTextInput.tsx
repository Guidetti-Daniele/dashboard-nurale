import { Input } from "@/components/ui/input";
import type { FilterColumnInputProps } from "../FilterColumnInput";

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
