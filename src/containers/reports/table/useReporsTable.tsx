import { useState } from "react";
import { api } from "yaya/core";

export const useReportTable = () => {
  const [filters, setFilters] = useState({});

  console.log(">>>> filters", filters);
  const { isLoading, data } = api.reports.getAll.useQuery({
    initialData: [],
  });

  const columns = [
    { accessorKey: "name" },
    { accessorKey: "stockDuarte" },
    { accessorKey: "stockDeposito" },
    { accessorKey: "stockColon" },
    { accessorKey: "totalStock" },
  ];

  return {
    data,
    columns,
    isLoading,
    setFilters,
  };
};
