import { useSaleTable } from "./useSaleTable";
import { Table } from "yaya/core";
import { Sale } from "yaya/shared/types/sales";

interface SaleTableProps {
  openView: (data: Sale) => void;
}

export const SaleTable = (props: SaleTableProps) => {
  const { openView } = props;
  const { columns, data, isLoading, createFn, cancelFn } = useSaleTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        viewFn: openView,
        cancelFn,
        createFn,
      }}
    />
  );
};
