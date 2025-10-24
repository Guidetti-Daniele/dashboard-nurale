import React from "react";

import { TableRow, TableCell } from "@/components";

type TableBodyNoResultsProps = {
  colSpan: number;
};

export const TableBodyNoResults: React.FC<TableBodyNoResultsProps> = ({
  colSpan,
}) => {
  return (
    <TableRow className="min-h-20">
      <TableCell
        colSpan={colSpan}
        className="text-gray-400 text-md text-center"
      >
        Nessun risultato
      </TableCell>
    </TableRow>
  );
};
