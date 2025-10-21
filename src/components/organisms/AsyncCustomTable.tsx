import { Suspense, use } from "react";

import CustomTable from "./CustomTable";
import { Spinner } from "../ui/spinner";

import type { CustomTableProps } from "./CustomTable";

type AsyncCustomTableProps<TData> = {
  dataPromise: Promise<TData[]>;
  loadingComp?: React.ReactNode;
  errorComp?: React.ReactNode;
} & Omit<CustomTableProps<TData>, "data">;

//   errorComp = (
//     <ErrorMessage message="Errore durante il caricamento dei dati: riprovare" />
//   ),

const AsyncCustomTable = <TData,>({
  columns,
  dataPromise,
  noResultsComp,
  loadingComp = <Spinner className="size-8" />,
}: AsyncCustomTableProps<TData>) => {
  const fetchedData = use(dataPromise);

  return (
    <Suspense fallback={loadingComp}>
      <CustomTable
        columns={columns}
        data={fetchedData}
        noResultsComp={noResultsComp}
      />
    </Suspense>
  );
};

export default AsyncCustomTable;
