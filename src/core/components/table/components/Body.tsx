import { Row, flexRender } from "@tanstack/react-table";

import { en } from "yaya/shared";
import { Typography } from "../../typography";

interface Props<T> {
  rows: Row<T>[];
  loading?: boolean;
}

export const TableBody = <T,>({ rows, loading }: Props<T>) => {
  const showEmpty = !rows.length && !loading;
  const showLoading = !rows.length && loading;
  const showRows = !showEmpty && !showLoading;

  return (
    <tbody>
      {showEmpty && (
        <tr>
          <td colSpan={100}>
            <div className="flex w-full items-center justify-center">
              <Typography variant="muted" className="py-10">
                {en.common.empty}
              </Typography>
            </div>
          </td>
        </tr>
      )}

      {showLoading && (
        <tr>
          <td colSpan={100}>
            <div className="flex w-full items-center justify-center">
              <Typography variant="muted" className="py-10">
                {en.common.loading}
              </Typography>
            </div>
          </td>
        </tr>
      )}

      {showRows &&
        rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="pb-[20px] pt-[14px] sm:text-[14px]">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  );
};
