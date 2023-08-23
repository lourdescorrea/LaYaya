import { BrandCreateForm } from "./forms";
import { BrandTable } from "./table";
import { useBrandPage } from "./useBrandPage";

export const BrandPage = () => {
  const { isOpen, onOpen, onToggle } = useBrandPage();

  return (
    <div className="h-full w-full">
      <BrandTable openCreate={onOpen} />
      <BrandCreateForm open={isOpen} onToggle={onToggle} />
    </div>
  );
};
