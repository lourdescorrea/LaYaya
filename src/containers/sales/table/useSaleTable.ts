import { type Sale } from "@prisma/client";
import { useRouter } from "next/router";
import { api, paths, useActionToast } from "yaya/core";
import { en } from "yaya/shared";

export const useSaleTable = () => {
  const { push } = useRouter();

  const { isLoading, data } = api.sales.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [
    { accessorKey: "shop", header: en.table_columns.shop },
    { accessorKey: "amount", header: en.table_columns.total, type: "currency" },
    { accessorKey: "paymentMethod", header: en.table_columns.payment_method },
    { accessorKey: "state", header: en.table_columns.state, type: "boolean" },
  ];

  const onCancel = useActionToast({
    trpc: api.sales.cancel,
    errorMsg: `${en.admin.sale.cancel.messages.error}`,
    successMsg: `${en.admin.sale.cancel.messages.success}`,
    alertMsg: `${en.admin.sale.cancel.title}`,
  });

  const createFn = () => push(paths.sales.create);
  const viewFn = (data: Sale) => push(paths.sales.view(data.id));
  const cancelFn = (data: Sale) => onCancel({ id: data.id });

  return {
    columns,
    data,
    viewFn,
    createFn,
    cancelFn,
    isLoading,
  };
};
