import { FilterTable } from "./FilterTable";
import { useReportTable } from "./useReporsTable";
import { Card, Table } from "yaya/core";

export const ReportTable = () => {
  const { columns, data, isLoading, setFilters } = useReportTable();

  return (
    <div className="space-y-4">
      <Card className=" border-2 border-card bg-white p-8 pb-10">
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

{
  /* Agregar una car, con un fomulario y demas. algunos Select.Le pasamos la data al usereports, */
}
