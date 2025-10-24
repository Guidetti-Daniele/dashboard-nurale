import { Suspense } from "react";
import type { ColumnDef } from "@tanstack/react-table";

import {
  Spinner,
  PromiseErrorBoundary,
  CustomTable,
  type ErrorFromPromise,
} from "@/components";

type AsyncCustomTableProps<TData> = {
  dataPromise: Promise<TData[] | ErrorFromPromise>;
  columns: ColumnDef<TData>[];
};

export const AsyncCustomTable = <TData,>({
  dataPromise,
  columns,
}: AsyncCustomTableProps<TData>) => {
  return (
    <section className="flex justify-center items-center rounded-lg p-2 shadow has-[[data-error]]:bg-error has-[[data-spinner]]:h-[400px]">
      {/* It would be better a custom skeleton for the table instead of a spinner */}
      <Suspense fallback={<Spinner data-spinner className="size-8" />}>
        <PromiseErrorBoundary<TData[]>
          dataPromise={dataPromise}
          renderChildren={(data) => (
            <CustomTable<TData> columns={columns} data={data} />
          )}
        />
      </Suspense>
    </section>
  );
};
