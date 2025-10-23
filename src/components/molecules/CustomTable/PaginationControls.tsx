import { ArrowLeft, ArrowRight } from "lucide-react";

import type { PaginationState, Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";

type PaginationControlsProps<TData> = {
  table: Table<TData>;
  setPagination: React.Dispatch<React.SetStateAction<PaginationState>>;
};

const PaginationControls = <TData,>({
  table,
  setPagination,
}: PaginationControlsProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const totalPages = table.getPageCount();

  return (
    <div className="mt-5 flex items-center gap-3">
      <Button
        onClick={() =>
          setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex - 1 }))
        }
        disabled={!table.getCanPreviousPage()}
      >
        <ArrowLeft />
      </Button>
      <p>
        Pagina {currentPage} di {totalPages}
      </p>
      <Button
        onClick={() =>
          setPagination((prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }))
        }
        disabled={!table.getCanNextPage()}
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default PaginationControls;
