import { flexRender, type Header } from "@tanstack/react-table";

import HeaderSortableButton from "./TableHeadSortableButton";

export type TableHeadContentProps<TData> = {
  header: Header<TData, unknown>;
};

const TableHeadContent = <TData,>({ header }: TableHeadContentProps<TData>) => {
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

export default TableHeadContent;
