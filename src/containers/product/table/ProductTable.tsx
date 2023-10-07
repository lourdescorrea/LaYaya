import { useProductTable } from "./useProductTable";
import { useSession } from "next-auth/react";
import { Table } from "yaya/core";
import { PERMISSIONS } from "yaya/shared";

export const ProductTable = () => {
  const { columns, data, isLoading, deleteFn, editFn, createFn } =
    useProductTable();

  const session = useSession();
  const hasActions = PERMISSIONS.ADMINS.includes(session.data?.user.role ?? "");

  return (
    <Table
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      columnsData={columns}
      title={!hasActions ? "Listado de productos" : undefined}
      data={data}
      loading={isLoading}
      actions={
        hasActions
          ? {
              createFn,
              editFn,
              deleteFn,
            }
          : {}
      }
    />
  );
};
