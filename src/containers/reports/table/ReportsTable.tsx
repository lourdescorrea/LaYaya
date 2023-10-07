import { FilterTable } from "./FilterTable";
import { useReportTable } from "./useReporsTable";
import { Card, Table } from "yaya/core";

export const ReportTable = () => {
  const { columns, data, isLoading, setFilters } = useReportTable();

  return (
    <div className="flex flex-col space-y-4">
      <Card className="bg-slate-200 p-8">
        <FilterTable setFilters={setFilters} />
      </Card>
      <Table
        columnsData={columns}
        data={data}
        loading={isLoading}
        title="Reporte de inventario"
      />
    </div>
  );
};
