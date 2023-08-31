import { Table } from "yaya/core";
import { useProductTable } from "./useProductTable";

export const ProductTable = () => {
  const { columns, data, isLoading, deleteFn, editFn, createFn } =
    useProductTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn,
        editFn,
        deleteFn,
      }}
    />
  );
};
