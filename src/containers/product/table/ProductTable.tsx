import { Table } from "yaya/core";
import { useProductTable } from "./useProductTable";

interface ProductTableProps {
  openCreate: () => void;
  // openEdit: (data Product ) => void;
}

export const ProductTable = (props: ProductTableProps) => {
  const { openCreate } = props;
  const { columns, data, isLoading, deleteFn } = useProductTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn: openCreate,
        deleteFn: deleteFn,
      }}
    />
  );
};
