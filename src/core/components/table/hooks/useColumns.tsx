import { TableActions } from "../components";
import { TableCell } from "../components/Cell";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { en } from "yaya/shared";

export interface TableActions<T> {
  createFn?: () => void;
  editFn?: (row: T) => void;
  viewFn?: (row: T) => void;
  deleteFn?: (row: T) => void;
  cancelFn?: (row: T) => void;
  customs?: [{ icon: any; onClick: (row: T) => void }];
}

interface Args<T> {
  columnsData: {
    accessorKey: string;
    type?: "link";
  }[];
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

  const { deleteFn, editFn, viewFn, cancelFn, customs } = actions;

  const hasActions = deleteFn || editFn || viewFn || cancelFn || customs;

  if (hasActions) {
    const removeAction = deleteFn ? { onClick: deleteFn } : undefined;
    const cancelAction = cancelFn ? { onClick: cancelFn } : undefined;
    const viewAction = viewFn ? { onClick: viewFn } : undefined;
    const editAction = editFn ? { onClick: editFn } : undefined;

    columns.push({
      id: "actions",
      cell: (props: any) => (
        <TableActions<T>
          row={props.row.original}
          edit={editAction}
          remove={removeAction}
          cancel={cancelAction}
          view={viewAction}
          customs={customs}
        />
      ),
      header: en.common.actions,
    });
  }

  return columns;
};
