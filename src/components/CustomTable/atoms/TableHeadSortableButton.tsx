import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

import type { TableHeadContentProps } from "@/components";

export const TableHeadSortableButton = <TData,>({
  header,
}: TableHeadContentProps<TData>) => {
  const isSorted = header.column.getIsSorted();
  const size = 15;

  return (
    <div
      onClick={() => header.column.toggleSorting()}
      className="cursor-pointer"
    >
      {!isSorted ? (
        <ArrowUpDown size={size} />
      ) : isSorted === "asc" ? (
        <ArrowUp size={size} />
      ) : (
        <ArrowDown size={size} />
      )}
    </div>
  );
};
