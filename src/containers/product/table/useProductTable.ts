import { Product } from "@prisma/client";
import { useRouter } from "next/router";
import { api, paths, useActionToast } from "yaya/core";
import { en } from "yaya/shared";

export const useProductTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [
    { accessorKey: "name" },
    { accessorKey: "marca" },
    { accessorKey: "stock" },
    { accessorKey: "precio" },
    { accessorKey: "kilos" },
  ];

  const onDelete = useActionToast({
    trpc: api.products.delete,
    errorMsg: `${en.admin.product.delete.messages.error}`,
    successMsg: `${en.admin.product.delete.messages.success}`,
    alertMsg: `${en.admin.product.delete.title}`,
  });

  const deleteFn = (data: Product) => onDelete({ id: data.id });
  const editFn = (data: Product) => push(paths.product.edit(data.id));
  const createFn = () => push(paths.product.create);

  return {
    columns,
    data,
    editFn,
    deleteFn,
    createFn,
    isLoading,
  };
};
