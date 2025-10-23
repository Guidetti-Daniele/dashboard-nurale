import { flexRender, type Header } from "@tanstack/react-table";

import HeaderSortableButton from "./HeaderSortableButton";

export type SortableTableHeadProps<TData> = {
  header: Header<TData, unknown>;
};

const SortableTableHead = <TData,>({
  header,
}: SortableTableHeadProps<TData>) => {
  if (header.isPlaceholder) return null;

  const content = flexRender(
    header.column.columnDef.header,
    header.getContext()
  );

  return (
    <div className="flex justify-between items-center gap-2">
      {content}
      {header.column.getCanSort() && <HeaderSortableButton header={header} />}
    </div>
  );
};

export default SortableTableHead;
