import { Table } from "yaya/core";
import type { Brand } from "yaya/shared";
import { useBrandTable } from "./useBrandTable";

interface BrandTableProps {
  openCreate: () => void;
  openEdit: (data: Brand) => void;
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
