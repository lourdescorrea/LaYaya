import { type Product } from "@prisma/client";
import { useRouter } from "next/router";
import { api, paths, useActionToast } from "yaya/core";
import { en } from "yaya/shared";

export const useProductTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [
    { accessorKey: "image", type: "image", header: en.table_columns.image },
    { accessorKey: "name", header: en.table_columns.name },
    { accessorKey: "brand.name", header: en.table_columns.brand },
    { accessorKey: "price", type: "currency", header: en.table_columns.price },
    { accessorKey: "stockDuarte", header: en.constants.shops.duarte },
    { accessorKey: "stockColon", header: en.constants.shops.colon },
    { accessorKey: "stockDeposito", header: en.constants.shops.deposit },
  ];

  const onCancel = useActionToast({
    trpc: api.products.archive,
    errorMsg: `${en.admin.product.delete.messages.error}`,
    successMsg: `${en.admin.product.delete.messages.success}`,
    alertMsg: `${en.admin.product.delete.title}`,
  });

  const deleteFn = (data: Product) => onCancel({ id: data.id });
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
