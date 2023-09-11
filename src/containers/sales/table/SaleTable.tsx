import { Table } from "yaya/core";
export const SaleTable = () => {
  const { columns, data, isLoading, deleteFn, createFn } = useSaleTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn,
        deleteFn,
      }}
    />
  );
};
