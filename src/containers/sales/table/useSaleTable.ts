import { Sale } from "@prisma/client";
import { useRouter } from "next/router";
import { api, paths, useActionToast } from "yaya/core";
import { en } from "yaya/shared";

export const useSaleTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.sales.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [
    // { accessorKey: "createdAt" },
    { accessorKey: "shop" },
    { accessorKey: "amount" },
    { accessorKey: "paymentMethod" },
    { accessorKey: "state" },
  ];

  const onCancel = useActionToast({
    trpc: api.sales.cancel,
    errorMsg: `${en.admin.sale.cancel.messages.error}`,
    successMsg: `${en.admin.sale.cancel.messages.success}`,
    alertMsg: `${en.admin.sale.cancel.title}`,
  });

  const createFn = () => push(paths.sales.create);
  const cancelFn = (data: Sale) => onCancel({ id: data.id });
  const viewFn = (data: Sale) => push(paths.sales.view(data.id));

  // const modifiedData = data.map((sale) => ({
  //   ...sale,
  //   createdAt: new Date(sale.createdAt), // Convertir a objeto Date
  //   updatedAt: new Date(sale.updatedAt), // Convertir a objeto Date
  // }));

  return {
    columns,
    data,
    viewFn,
    createFn,
    cancelFn,
    isLoading,
  };
};
