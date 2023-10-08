import { useSaleTable } from "./useSaleTable";
import { MdOutlineCancel } from "react-icons/md";
import { Table } from "yaya/core";
import { SALE_STATE, type Sale } from "yaya/shared";

interface SaleTableProps {
  openView: (data: Sale) => void;
}

export const SaleTable = (props: SaleTableProps) => {
  const { openView } = props;
  const { columns, data, isLoading, createFn, cancelFn } = useSaleTable();

  return (
    <Table
      columnsData={columns as any}
      data={data}
      loading={isLoading}
      actions={{
        customs: [
          {
            icon: <MdOutlineCancel className="h-4 w-4 text-red-700" />,
            onClick: cancelFn,
            isDisabled: (row) => row.state === SALE_STATE.CANCELED,
          },
        ],
        createFn,
        viewFn,
      }}
    />
  );
};
