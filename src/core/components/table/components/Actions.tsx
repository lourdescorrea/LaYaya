import { Button } from "../../button";
import { BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdEdit } from "react-icons/md";

export interface RowAction<T> {
  onClick: (row: T) => void;
  disabled?: boolean;
}

interface RowActionsProps<T> {
  row: T & { id: string };
  edit?: RowAction<T>;
  remove?: RowAction<T>;
  view?: RowAction<T>;
  customs?: Array<{
    icon: any;
    onClick: (row: T) => void;
    isDisabled?: (row: T) => boolean;
  }>;
}

export const TableActions = <T,>(props: RowActionsProps<T>) => {
  const { row, edit, remove, view, customs } = props;

  // TODO: LOADING STATE?

  const iconClass = "h-fit w-fit p-2";
  return (
    <div className="flex w-full items-center space-x-4">
      {view && (
        <Button
          size="icon"
          variant="ghost"
          className={iconClass}
          disabled={view.disabled}
          onClick={() => view.onClick(row)}
        >
          <BiShow className="h-4 w-4" />
        </Button>
      )}
      {edit && (
        <Button
          size="icon"
          variant="ghost"
          className={iconClass}
          disabled={edit.disabled}
          onClick={() => edit.onClick(row)}
        >
          <MdEdit className="h-4 w-4" />
        </Button>
      )}
      {remove && (
        <Button
          size="icon"
          variant="ghost"
          className={iconClass}
          disabled={remove.disabled}
          onClick={() => remove.onClick(row)}
        >
          <MdDeleteOutline className="h-4 w-4" />
        </Button>
      )}
      {customs?.map((custom, index) => (
        <Button
          key={index}
          size="icon"
          variant="ghost"
          className={iconClass}
          disabled={custom.isDisabled?.(row)}
          onClick={() => custom.onClick(row)}
        >
          {custom.icon}
        </Button>
      ))}
    </div>
  );
};
