import { useRouter } from "next/router";
import { api } from "yaya/core";

export const useReportTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [{ accessorKey: "name" }, { accessorKey: "shop" }];

  return {
    data,
    columns,
    isLoading,
  };
};
