import { FilterTable } from "./FilterTable";
import { useReportTable } from "./useReporsTable";
import { Card, Table } from "yaya/core";

export const ReportTable = () => {
  const { columns, data, isLoading, setFilters } = useReportTable();

  return (
    <div className=" flex flex-row space-x-2 pt-8">
      <Card className=" border-2 drop-shadow-2xl  bg-slate-200 p-8 ">
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
