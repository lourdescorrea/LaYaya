import { TableActions } from "../components";
import { TableCell, type TableCellVariant } from "../components/Cell";
import { type CellContext, type ColumnDef } from "@tanstack/react-table";
import { en } from "yaya/shared";

export interface TableActions<T> {
  createFn?: () => void;
  editFn?: (row: T) => void;
  viewFn?: (row: T) => void;
  deleteFn?: (row: T) => void;
  customs?: [
    { icon: any; onClick: (row: T) => void; isDisabled?: (row: T) => boolean }
  ];
}

export interface TableColumnData {
  accessorKey: string;
  header?: string;
  type?: TableCellVariant;
}

interface Args<T> {
  columnsData: TableColumnData[];
  actions?: TableActions<T>;
}

export const useColumns = <T,>(props: Args<T>) => {
  const { columnsData, actions = {} } = props;

  const columns: ColumnDef<T, any>[] = columnsData.map((column) => ({
    ...column,

    cell: (info: CellContext<T, string | number>) => (
      <TableCell value={info.getValue()} type={column.type} />
    ),
  }));

  const { deleteFn, editFn, viewFn, customs } = actions;

  const hasActions = deleteFn ?? editFn ?? viewFn ?? customs;

  if (hasActions) {
    const removeAction = deleteFn ? { onClick: deleteFn } : undefined;
    const viewAction = viewFn ? { onClick: viewFn } : undefined;
    const editAction = editFn ? { onClick: editFn } : undefined;

    columns.push({
      id: "actions",
      cell: (props: any) => (
        <TableActions<T>
          row={props.row.original}
          edit={editAction}
          remove={removeAction}
          view={viewAction}
          customs={customs}
        />
      ),
      header: en.common.actions,
    });
  }

  return columns;
};
