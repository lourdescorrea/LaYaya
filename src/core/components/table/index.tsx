import { Card } from "../card";
import { Pagination, TableBody, TableFilter, TableHead } from "./components";
import { TableArgs, useTable } from "./hooks/useTable";

interface TableProps<T> extends TableArgs<T> {
  title?: string;
  loading?: boolean;
}

export const Table = <T,>(props: TableProps<T>) => {
  const { title, loading, ...args } = props;
  const { topAction, filterProps, paginationProps, table } = useTable<T>(args);

  return (
    <Card
      className="h-full w-full bg-slate-200 p-4 pb-10"
      title={title}
      topAction={topAction}
      topComponent={<TableFilter {...filterProps} />}
    >
      <div className="mt-8 h-full overflow-x-auto">
        <table className="w-full">
          <TableHead<T> headers={table.getHeaderGroups()} />
          <TableBody<T> rows={table.getRowModel().rows} loading={loading} />
        </table>
      </div>
      <Pagination {...paginationProps} />
    </Card>
  );
};
