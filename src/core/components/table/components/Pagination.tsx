import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { en } from "yaya/shared";
import { Button } from "../../button";

interface PaginationProps {
  canPrevious: boolean;
  canNext: boolean;
  currentPage: number;
  totalCount: number;
  previousPage: () => void;
  nextPage: () => void;
}

export const Pagination = (props: PaginationProps) => {
  const {
    canPrevious,
    canNext,
    currentPage,
    totalCount,
    previousPage,
    nextPage,
  } = props;

  const prevButton = (
    <Button onClick={previousPage} disabled={!canPrevious} variant="outline">
      <BiChevronLeft className="h-5 w-5" aria-hidden="true" />
    </Button>
  );

  const nextButton = (
    <Button
      onClick={nextPage}
      disabled={!canNext}
      className="ml-3"
      variant="outline"
    >
      <BiChevronRight className="h-5 w-5" aria-hidden="true" />
    </Button>
  );

  return (
    <div className="flex items-center justify-between border-t border-border px-4 py-3 sm:px-6">
      {/* MOBILE */}
      <div className="flex flex-1 items-center justify-between sm:hidden">
        {prevButton}
        <div>
          <p className="text-sm font-semibold tracking-wide">
            {currentPage} / {totalCount}
          </p>
        </div>
        {nextButton}
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between ">
        <div>
          <p className="text-sm tracking-wide">
            {en.pagination.legend_temp(currentPage, totalCount)}
          </p>
        </div>
        <div className="inline-flex space-x-4 rounded-md shadow-sm">
          {prevButton}

          {nextButton}
        </div>
      </div>
    </div>
  );
};
