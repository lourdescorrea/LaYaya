import { useState } from "react";
import { api } from "yaya/core";
import { SHOPS } from "yaya/shared";

export const useReportTable = () => {
  const [filters, setFilters] = useState({
    min: 0,
    max: 10,
    shop: SHOPS.COLON,
  });

  console.log(">>>> filters", filters);
  const { isLoading, data } = api.reports.getAll.useQuery(filters, {
    initialData: [],
  });

  // const filteredData = data.map((item) => {
  //   const itemShop = SHOPS.COLON ? item.totalStock : 0;
  //   const totalStock = itemShop === filters.shop ? item.totalStock : 0;
  //   return { ...item, totalStock };
  // });

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
