import {
  useColumns,
  type TableActions,
  type TableColumnData,
} from "./useColumns";
import { usePagination } from "./usePagination";
import { rankItem } from "@tanstack/match-sorter-utils";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type FilterFn,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

export interface TableArgs<T> {
  columnsData: TableColumnData[];
  data: T[];
  actions?: TableActions<T>;
}

export const useTable = <T>(args: TableArgs<T>) => {
  const { columnsData, data, actions } = args;
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useColumns<T>({ columnsData, actions });

  const table = useReactTable<T>({
    columns,
    data,
    state: {
      sorting,
      globalFilter,
    },
    globalFilterFn: globalFilterFn,
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const paginationProps = usePagination<T>(table);

  const topAction = actions?.createFn
    ? {
        icon: MdAdd,
        onClick: () => actions?.createFn?.(),
      }
    : undefined;

  return {
    table,
    topAction,
    filterProps: {
      value: globalFilter,
      onChange: setGlobalFilter,
    },
    paginationProps,
  };
};

const globalFilterFn: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value as string);

  // Store the itemRank info
  addMeta({ itemRank });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};
