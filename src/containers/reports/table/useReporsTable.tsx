import { useRouter } from "next/router";
import { api } from "yaya/core";

export const useReportTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

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

  const createFn = () => push("");

  return {
    data: dataWithTotals,
    createFn,
    columns,
    isLoading,
  };
};
