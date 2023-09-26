import { useReportTable } from "./useReporsTable";
import { Table } from "yaya/core";

export const ReportTable = () => {
  const { columns, data, isLoading } = useReportTable();

  return (
    <>
      {/* Agregar una car, con un fomulario y demas. algunos Select.Le pasamos la data al usereports, */}
      <Table
        columnsData={columns}
        data={data}
        loading={isLoading}
        title="Reporte de inventario"
      />
    </>
  );
};
