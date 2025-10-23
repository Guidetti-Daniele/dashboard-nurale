import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@tanstack/react-table"; //or vue, svelte, solid, qwik, etc.
import type { Column, RowData } from "@tanstack/react-table";

declare module "@tanstack/react-table" {
  interface ColumnMeta<TData extends RowData, TValue> {
    filterComponentFunction: (column: Column<TData, TValue>) => React.ReactNode;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
