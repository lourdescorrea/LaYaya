import { useRouter } from "next/router";
import { Table, paths } from "yaya/core";
import { useProductTable } from "./useProductTable";

interface ProductTableProps {
  openCreate: () => void;
}

export const ProductTable = (props: ProductTableProps) => {
  const { openCreate } = props;
  const router = useRouter(); // Obtén el enrutador

  const { columns, data, isLoading, deleteFn, editFn, createFn } =
    useProductTable();

  const navigateToProducts = () => {
    router.push(paths.product.edit);
  };

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn: openCreate,
        editFn: navigateToProducts,
        deleteFn: deleteFn,
      }}
    />
  );
};
