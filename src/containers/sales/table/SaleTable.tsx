import { Table } from "yaya/core";
import { useSaleTable } from "./useSaleTable";
export const SaleTable = () => {
  const { columns, data, isLoading, createFn } = useSaleTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn,
      }}
    />
  );
};
