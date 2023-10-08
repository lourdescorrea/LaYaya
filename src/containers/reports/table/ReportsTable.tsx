import { FilterTable } from "./FilterTable";
import { useReportTable } from "./useReporsTable";
import { Card, Table } from "yaya/core";

export const ReportTable = () => {
  const { columns, data, isLoading, setFilters, session } = useReportTable();

  if (!session.data) return null;

  return (
    <div className="flex flex-col space-y-4">
      <Card className="bg-slate-200 p-8">
        <FilterTable
          setFilters={setFilters}
          role={session.data.user.role}
          shop={session.data.user.shops[0]!}
        />
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
