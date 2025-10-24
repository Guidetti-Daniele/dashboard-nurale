import { Filter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button, type TableControlProps } from "@/components";

export const ColumnFilterDropdown = <TData,>({
  table,
}: TableControlProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <Filter />
          <p>Filtra colonne</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {table
          .getAllColumns()
          .filter((col) => col.getCanFilter() && !col.getCanGlobalFilter())
          .map(({ id, columnDef: { header } }) => (
            <DropdownMenuItem key={id}>{header as string}</DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColumnFilterDropdown;
