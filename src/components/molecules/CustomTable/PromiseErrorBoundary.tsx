import { use } from "react";
import ErrorMessage from "./ErrorMessage";

export type ErrorFromPromise = { error: unknown };

type PromiseErrorBoundaryProps<T> = {
  renderChildren: (data: T) => React.ReactNode;
  dataPromise: Promise<T | ErrorFromPromise>;
  errorComp?: React.ReactNode;
};

function isError<T>(data: T | ErrorFromPromise): data is ErrorFromPromise {
  return !!(data as ErrorFromPromise).error;
}

const PromiseErrorBoundary = <T,>({
  renderChildren,
  dataPromise,
  errorComp = <ErrorMessage message="Errore durante il caricamento dei dati" />,
}: PromiseErrorBoundaryProps<T>) => {
  const data = use(dataPromise);

  return isError(data) ? errorComp : renderChildren(data);
};

export default PromiseErrorBoundary;
