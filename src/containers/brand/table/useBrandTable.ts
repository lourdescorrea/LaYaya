import { api } from "yaya/core";

export const useBrandTable = () => {
  const columns = [{ accessorKey: "name" }];

  const { isLoading, data } = api.brands.getAll.useQuery(undefined, {
    initialData: [],
  });

  // TODO: Add delete fn

  return {
    columns,
    data,
    isLoading,
  };
};
