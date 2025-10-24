import { Input } from "@/components/ui/input";

import type { FilterColumnInputProps } from "../FilterColumnInput";
import type { InputHTMLAttributes } from "react";

interface FilterColumnInputField<TData> extends FilterColumnInputProps<TData> {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
}

const FilterColumnInputField = <TData,>({
  type,
  column,
}: FilterColumnInputField<TData>) => {
  return (
    <Input
      type={type}
      placeholder={column.columnDef.header as string}
      value={(column.getFilterValue() as string) || ""}
      onChange={(event) => column.setFilterValue(event.target.value)}
    />
  );
};

export default FilterColumnInputField;
