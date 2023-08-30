import { Product } from "@prisma/client";
import { api, useActionToast } from "yaya/core";
import { en } from "yaya/shared";

export const useProductTable = () => {
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
    trpc: api.brands.delete,
    errorMsg: `${en.admin.product.delete.messages.error}`,
    successMsg: `${en.admin.product.delete.messages.success}`,
    alertMsg: `${en.admin.product.delete.title}`,
  });

  const deleteFn = (products: Product) => onDelete({ id: products.id });

  return {
    columns,
    data,
    deleteFn,
    isLoading,
  };
};
