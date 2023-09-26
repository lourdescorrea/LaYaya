import { BiShow } from "react-icons/bi";
import { MdDeleteOutline, MdEdit, MdOutlineCancel } from "react-icons/md";
import { Button } from "../../button";

interface RowActionsProps<T> {
  row: T & { id: string };
  edit?: {
    onClick: (row: T) => void;
    disabled?: boolean;
  };
  remove?: {
    onClick: (row: T) => void;
    disabled?: boolean;
  };
  cancel?: {
    onClick: (row: T) => void;
    disabled?: boolean;
  };
  view?: {
    onClick: (row: T) => void;
    disabled?: boolean;
  };
  customs?: Array<{
    icon: any;
    onClick: (row: T) => void;
  }>;
}

export const TableActions = <T,>(props: RowActionsProps<T>) => {
  const { row, edit, remove, view, cancel, customs } = props;

  // TODO: LOADING STATE?

  const iconClass = "h-fit w-fit p-2";
  const cancelIconClass = "h-fit w-fit p-2 text-red-700";
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
      {cancel && (
        <Button
          size="icon"
          variant="ghost"
          className={cancelIconClass}
          disabled={cancel.disabled}
          onClick={() => cancel.onClick(row)}
        >
          <MdOutlineCancel className="h-4 w-4" />
        </Button>
      )}
      {customs?.map((custom, index) => (
        <Button
          key={index}
          size="icon"
          variant="ghost"
          className={iconClass}
          onClick={() => custom.onClick(row)}
        >
          {custom.icon}
        </Button>
      ))}
    </div>
  );
};
