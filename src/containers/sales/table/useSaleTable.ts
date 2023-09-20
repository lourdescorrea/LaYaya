import { Sale } from "@prisma/client";
import { useRouter } from "next/router";
import { api, paths } from "yaya/core";

export const useSaleTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.sales.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [
    { accessorKey: "createdAt" },
    { accessorKey: "shop" },
    { accessorKey: "amount" },
    { accessorKey: "paymentMethod" },
    { accessorKey: "state" },
  ];

  const viewFn = (data: Sale) => push(paths.sales.view(data.id));
  const createFn = () => push(paths.sales.create);

  const modifiedData = data.map((sale) => ({
    ...sale,
    createdAt: new Date(sale.createdAt).toLocaleDateString(),
  }));

  return {
    columns,
    data: modifiedData,
    viewFn,
    createFn,
    isLoading,
  };
};
