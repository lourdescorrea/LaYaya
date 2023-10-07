import { SaleViewSheet } from "./SaleViewSheet";
import { SaleTable } from "./table";
import { useViewSheet } from "./useSalePage";

export const SalesPage = () => {
  const view = useViewSheet();

  return (
    <div className="h-full w-full">
      <SaleTable openView={view.onOpen} />
      {view.isOpen && view.data && (
        <SaleViewSheet
          open={view.isOpen}
          onToggle={view.onToggle}
          data={view.data}
        />
      )}
    </div>
  );
};
