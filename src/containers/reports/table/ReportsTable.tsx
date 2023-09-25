import { useReportTable } from "./useReporsTable";
import { Table } from "yaya/core";
import { TableFilter } from "yaya/core/components/table/components";

export const ReportTable = () => {
  const { columns, data, isLoading } = useReportTable();

  return (
    <>
      <TableFilter value="" onChange={function (value: string): void {}} />

      <Table
        columnsData={columns}
        data={data}
        loading={isLoading}
        actions={{}}
      />
    </>
  );
};
