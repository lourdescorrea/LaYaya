import { Product } from "@prisma/client";
import { useRouter } from "next/router";
import { api, paths, useActionToast } from "yaya/core";
import { en } from "yaya/shared";

export const useProductTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [{ accessorKey: "name" }];

  const onCancel = useActionToast({
    trpc: api.products.cancel,
    errorMsg: `${en.admin.product.delete.messages.error}`,
    successMsg: `${en.admin.product.delete.messages.success}`,
    alertMsg: `${en.admin.product.delete.title}`,
  });

  const deleteFn = (data: Product) =>
    onCancel({
      id: data.id,
      name: data.name,
      price: data.price,
      stockDuarte: data.stockDuarte,
      stockColon: data.stockColon,
      stockDeposito: data.stockDeposito,
      codeBar: data.codeBar,
      weight: data.weight,
      image: data.image,
      brandId: data.brandId,
    });

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
