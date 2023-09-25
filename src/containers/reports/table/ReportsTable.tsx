import { useReportTable } from "./useReporsTable";
import { Table } from "yaya/core";

export const ReportTable = () => {
  const { columns, data, isLoading, createFn } = useReportTable();

  return (
    <>
      <Table
        columnsData={columns}
        data={data}
        loading={isLoading}
        actions={{ createFn }}
      />
    </>
  );
};
