import { useState } from "react";
import { api } from "yaya/core";
import { SHOPS, en } from "yaya/shared";

export const useReportTable = () => {
  const [filters, setFilters] = useState({
    min: 0,
    max: 10,
    shop: SHOPS.COLON,
  });

  const { isLoading, data } = api.reports.getAll.useQuery(filters, {
    initialData: [],
  });

  const columns = [
    { accessorKey: "name", header: en.table_columns.name },
    { accessorKey: "stockDuarte", header: en.constants.shops.duarte },
    { accessorKey: "stockColon", header: en.constants.shops.colon },
    { accessorKey: "stockDeposito", header: en.constants.shops.deposit },
    { accessorKey: "totalStock", header: en.table_columns.total },
  ];

  return {
    data,
    columns,
    isLoading,
    setFilters,
  };
};
