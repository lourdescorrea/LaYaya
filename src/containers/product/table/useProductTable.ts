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
    trpc: api.products.delete,
    errorMsg: `${en.admin.product.delete.messages.error}`,
    successMsg: `${en.admin.product.delete.messages.success}`,
    alertMsg: `${en.admin.product.delete.title}`,
  });

  const onEdit = useActionToast({
    trpc: api.products.edit,
    errorMsg: `${en.admin.product.edit.messages.error}`,
    successMsg: `${en.admin.product.edit.messages.success}`,
    alertMsg: `${en.admin.product.edit.title}`,
  });

  const OnCreate = useActionToast({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    alertMsg: `${en.admin.product.create.title}`,
  });

  const deleteFn = (products: Product) => onDelete({ id: products.id });
  const editFn = (products: Product) => onEdit({ id: products.id });
  const createFn = (products: Product) => OnCreate({ id: products.id });

  return {
    columns,
    data,
    editFn,
    deleteFn,
    createFn,
    isLoading,
  };
};
