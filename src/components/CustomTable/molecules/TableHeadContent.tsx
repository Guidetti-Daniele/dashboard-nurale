import { flexRender, type Header } from "@tanstack/react-table";
import { TableHeadSortableButton } from "@/components";

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

  return (
    <div className="flex justify-between items-center gap-2">
      {content}
      {header.column.getCanSort() && (
        <TableHeadSortableButton header={header} />
      )}
    </div>
  );
};
