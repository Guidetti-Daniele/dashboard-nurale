import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

type PaginationControlsProps<TData> = {
  table: Table<TData>;
};

const PaginationControls = <TData,>({
  table,
}: PaginationControlsProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div className="mt-5 flex items-center gap-3">
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft />
      </Button>
      <p>
        Pagina {currentPage} di {totalPages}
      </p>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PaginationControls;
