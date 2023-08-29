import { api, useActionToast } from "yaya/core";
import { Product, en } from "yaya/shared";

export const useProductTable = () => {
  const { isLoading, data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [{ accessorKey: "name" }];

  const onDelete = useActionToast({
    trpc: api.products.delete,
    errorMsg: `${en.admin.product.delete.messages.error}`,
    successMsg: `${en.admin.product.delete.messages.success}`,
    alertMsg: `${en.admin.product.delete.title}`,
  });

  const deleteFn = (product: Product) => onDelete({ id: product.id });

  return {
    columns,
    data,
    deleteFn,
    isLoading,
  };
};
