import { SaleViewForm } from "./forms";
import { SaleTable } from "./table";
import { useViewSheet } from "./useSalePage";

export const SalePage = () => {
  const view = useViewSheet();

  return (
    <div className="h-full w-full">
      <SaleTable openView={view.onOpen} />
      {view.isOpen && view.data && (
        <SaleViewForm
          open={view.isOpen}
          onToggle={view.onToggle}
          data={view.data}
        />
      )}
    </div>
  );
};
