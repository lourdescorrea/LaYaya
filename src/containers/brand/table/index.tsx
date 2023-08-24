import { Table } from "yaya/core";
import { useBrandTable } from "./useBrandTable";

interface BrandTableProps {
  openCreate: () => void;
  // TODO: Define type
  openEdit: (data: any) => void;
}

export const BrandTable = (props: BrandTableProps) => {
  const { openCreate, openEdit } = props;

  const { columns, data, isLoading } = useBrandTable();

  return (
    <Table
      columnsData={columns}
      data={data}
      loading={isLoading}
      actions={{
        createFn: openCreate,
        editFn: openEdit,
      }}
    />
  );
};
