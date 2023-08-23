import { Table } from "yaya/core";
import { useBrandTable } from "./useBrandTable";

interface BrandTableProps {
  openCreate: () => void;
}

export const BrandTable = (props: BrandTableProps) => {
  const { openCreate } = props;

  const { columns, data, isLoading } = useBrandTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn: openCreate,
      }}
    />
  );
};
