import { Search } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Badge,
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  type FilterTableControlsProps,
} from "@/components";

export const GlobalFilterInput = <TData,>({
  table,
  globalFilter,
  setGlobalFilter,
}: FilterTableControlsProps<TData>) => {
  const globalFilterableColumns = table
    .getAllLeafColumns()
    .filter((col) => col.getCanGlobalFilter());

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <InputGroup className="w-[500px] max-w-full">
          <InputGroupInput
            type="text"
            placeholder="Filtro globale..."
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
          />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
      </TooltipTrigger>
      <TooltipContent className="flex flex-col gap-5">
        <p>Si possono filtrare i seguenti campi: </p>
        <div className="flex flex-wrap items-center gap-2">
          {globalFilterableColumns.map((col, index) => (
            <Badge key={index} variant="secondary">
              {col.columnDef.header as string}
            </Badge>
          ))}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
