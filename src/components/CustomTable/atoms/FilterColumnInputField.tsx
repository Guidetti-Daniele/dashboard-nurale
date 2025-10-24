import type { InputHTMLAttributes } from "react";

import { Input, type FilterColumnInputProps } from "@/components";

interface FilterColumnInputField<TData> extends FilterColumnInputProps<TData> {
  type: InputHTMLAttributes<HTMLInputElement>["type"];
}

export const FilterColumnInputField = <TData,>({
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
