import { useRouter } from "next/router";
import { api } from "yaya/core";

export const useReportTable = () => {
  const { push } = useRouter();
  const { isLoading, data } = api.reports.getAll.useQuery(undefined, {
    initialData: [],
  });

  const columns = [
    { accessorKey: "name" },
    { accessorKey: "stockDuarte" },
    { accessorKey: "stockDeposito" },
    { accessorKey: "stockColon" },
    { accessorKey: "totalStock" },
  ];

  return {
    data,
    columns,
    isLoading,
  };
};
