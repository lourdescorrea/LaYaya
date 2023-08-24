import { Table } from "@tanstack/react-table";

export const usePagination = <T>(table: Table<T>) => {
  const {
    previousPage,
    nextPage,
    getCanPreviousPage,
    getCanNextPage,
    getState,
    getPageCount,
  } = table;

  const canPrevious = getCanPreviousPage();
  const canNext = getCanNextPage();
  const currentPage = getState().pagination.pageIndex + 1;
  const totalCount = getPageCount();

  return {
    canPrevious,
    canNext,
    currentPage,
    totalCount,
    previousPage,
    nextPage,
  };
};
