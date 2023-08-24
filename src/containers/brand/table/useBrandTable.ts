import { api, useActionToast } from "yaya/core";
import { Brand } from "yaya/shared";

export const useBrandTable = () => {
  const { isLoading, data } = api.brands.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [{ accessorKey: "name" }];

  // TODO: Add delete fn

  const onDelete = useActionToast({
    trpc: api.brands.delete,
    errorMsg: "Algo salio mal", // TODO: Move this to the text file
    successMsg: "Todo bien", // TODO: Move this to the text file
    alertMsg: "Estas seguro de que deseas eliminar esta marca?",
  });

  const deleteFn = (brand: Brand) => onDelete({ id: brand.id });

  return {
    columns,
    data,
    deleteFn,
    isLoading,
  };
};
