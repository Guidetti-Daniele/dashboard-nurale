import { ListFilter } from "lucide-react";
import type { Column } from "@tanstack/react-table";

import {
  FilterColumnInput,
  CustomAccordion,
  type CustomTableControlProps,
} from "@/components";

type FilterMenuProps<TData> = {
  columns: Column<TData>[];
};

type FilterSubMenuProps<TData> = {
  parentColumn: Column<TData>;
};

const FilterSubMenu = <TData,>({ parentColumn }: FilterSubMenuProps<TData>) => {
  return (
    <CustomAccordion
      type="single"
      collapsible={true}
      items={[
        {
          triggerNode: (
            <div className="w-full p-4 rounded-md flex items-center gap-5">
              <h1 className="font-bold">
                {parentColumn.columnDef.header as string}
              </h1>
            </div>
          ),
          contentNode: <FilterMenu<TData> columns={parentColumn.columns} />,
        },
      ]}
    />
  );
};

const FilterMenu = <TData,>({ columns }: FilterMenuProps<TData>) => {
  return (
    <div className="flex flex-col gap-5">
      {columns.map((column, index) => {
        return column.columns.length === 0 ? (
          <FilterColumnInput key={index} column={column} />
        ) : (
          <FilterSubMenu parentColumn={column} />
        );
      })}
    </div>
  );
};

const FilterMenuTrigger: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <ListFilter />
      <p>Menù di filtraggio</p>
    </div>
  );
};

export const FilterTableControls = <TData,>({
  table,
}: CustomTableControlProps<TData>) => {
  return (
    <CustomAccordion
      type="single"
      collapsible={true}
      items={[
        {
          triggerNode: <FilterMenuTrigger />,
          contentNode: <FilterMenu<TData> columns={table.getAllColumns()} />,
        },
      ]}
    />
  );
};
