import { useSession } from "next-auth/react";
import { useState } from "react";
import { api } from "yaya/core";
import { en } from "yaya/shared";

export const useReportTable = () => {
  const session = useSession();
  const [filters, setFilters] = useState({
    min: 0,
    max: 10,
    shop: null,
  });

  const { isLoading, data } = api.reports.getAll.useQuery(
    {
      ...filters,
      shop: (filters.shop ?? session.data?.user.shops[0])!,
    },
    {
      initialData: [],
      enabled: !!session.data?.user.shops[0],
    }
  );

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
    session,
  };
};
