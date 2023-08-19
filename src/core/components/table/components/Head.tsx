import { HeaderGroup, SortDirection, flexRender } from "@tanstack/react-table";
import { BiSortDown, BiSortUp } from "react-icons/bi";
import { cn } from "../../../utils";

interface Props<T> {
  headers: HeaderGroup<T>[];
}

export const TableHead = <T,>({ headers }: Props<T>) => {
  return (
    <thead>
      {headers.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const canSort = header.column.getCanSort();
            const sort = header.column.getToggleSortingHandler();
            const sortDir = header.column.getIsSorted();

            const sortIcons = {
              desc: <BiSortDown className="ml-2 h-4 w-4" />,
              asc: <BiSortUp className="ml-2 h-4 w-4" />,
            };

            return (
              <th
                key={header.id}
                className="border-b border-border pb-[10px] pr-14 text-start"
              >
                <div
                  className={cn(
                    "flex w-full justify-start pr-10 text-xs uppercase tracking-wide",
                    canSort && "cursor-pointer select-none"
                  )}
                  onClick={canSort ? sort : undefined}
                >
                  {!header.isPlaceholder &&
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  {sortDir && sortIcons[sortDir as SortDirection]}
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};
