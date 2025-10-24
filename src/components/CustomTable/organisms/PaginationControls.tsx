import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, type TableControlProps } from "@/components";

export const PaginationControls = <TData,>({
  table,
}: TableControlProps<TData>) => {
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
