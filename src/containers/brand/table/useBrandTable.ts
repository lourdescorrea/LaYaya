import { api, useActionToast } from "yaya/core";
import { Brand, en } from "yaya/shared";

export const useBrandTable = () => {
  const { isLoading, data } = api.brands.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [{ accessorKey: "name" }];

  const onDelete = useActionToast({
    trpc: api.brands.delete,
    errorMsg: `${en.admin.brand.delete.messages.error}`,
    successMsg: `${en.admin.brand.delete.messages.success}`,
    alertMsg: `${en.admin.brand.delete.title}`,
  });

  const deleteFn = (brand: Brand) => onDelete({ id: brand.id });

  return {
    columns,
    data,
    deleteFn,
    isLoading,
  };
};
