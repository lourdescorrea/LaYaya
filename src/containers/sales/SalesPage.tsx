import { SaleViewPage } from "./SaleView";
import { useViewSheet } from "./useSalePage";

export const SalePage = () => {
  const view = useViewSheet();

  return (
    <div className="h-full w-full">
      {view.isOpen && view.data && (
        <SaleViewPage
          open={view.isOpen}
          onToggle={view.onToggle}
          data={view.data}
        />
      )}
    </div>
  );
};
