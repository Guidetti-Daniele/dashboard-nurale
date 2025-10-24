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
    <section className="w-full p-2 flex justify-center items-center rounded-lg shadow has-[[data-error]]:bg-error has-[[data-spinner]]:h-[400px]">
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
