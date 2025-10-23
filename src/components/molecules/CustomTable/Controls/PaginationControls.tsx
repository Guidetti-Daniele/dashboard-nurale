import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { CustomTableControlProps } from "@/components/organisms/CustomTable";

const PaginationControls = <TData,>({
  table,
}: CustomTableControlProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div className="flex items-center gap-3">
      <Button
        variant="outline"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft />
      </Button>
      <p>
        Pagina {currentPage} di {totalPages}
      </p>
      <Button
        variant="outline"
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PaginationControls;
