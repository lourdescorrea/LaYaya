import { useRouter } from "next/router";
import { api } from "yaya/core";

export const useReportTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.reports.getAll.useQuery(undefined, {
    initialData: [],
  });

  // TODO:Mover al back
  const dataWithTotals = data.map((item) => {
    const total = item.stockDuarte + item.stockDeposito + item.stockColon;
    return {
      ...item,
      Total: total,
    };
  });

  const columns = [
    { accessorKey: "name" },
    { accessorKey: "stockDuarte" },
    { accessorKey: "stockDeposito" },
    { accessorKey: "stockColon" },
    { accessorKey: "Total" },
  ];

  return {
    data: dataWithTotals,
    columns,
    isLoading,
  };
};
