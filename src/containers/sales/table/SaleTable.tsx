import { useSaleTable } from "./useSaleTable";
import { Table } from "yaya/core";

export const SaleTable = () => {
  const { columns, data, isLoading, createFn, viewFn } = useSaleTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        viewFn,
        createFn,
      }}
    />
  );
};
