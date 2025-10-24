import { flexRender, type Header } from "@tanstack/react-table";
import { TableHeadSortableButton } from "@/components";

import { cn } from "@/lib/utils";

export type TableHeadContentProps<TData> = {
  header: Header<TData, unknown>;
};

export const TableHeadContent = <TData,>({
  header,
}: TableHeadContentProps<TData>) => {
  if (header.isPlaceholder) return null;

  const content = flexRender(
    header.column.columnDef.header,
    header.getContext()
  );
  const canGetSorted = header.column.getCanSort();

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        // If there is no sort icon then the header text goes in center.
        canGetSorted ? "justify-between" : "justify-center"
      )}
    >
      {content}
      {canGetSorted && <TableHeadSortableButton header={header} />}
    </div>
  );
};
