import { BrandCreateForm } from "./forms";
import { BrandEditForm } from "./forms/edit";
import { BrandTable } from "./table";
import { useCreateSheet, useEditSheet } from "./useBrandPage";

export const BrandPage = () => {
  const create = useCreateSheet();
  const edit = useEditSheet();
  return (
    <div className="h-full w-full">
      <BrandTable openCreate={create.onOpen} openEdit={edit.onOpen} />
      <BrandCreateForm open={create.isOpen} onToggle={create.onToggle} />
      {edit.isOpen && (
        <BrandEditForm
          open={edit.isOpen}
          onToggle={edit.onToggle}
          data={edit.data}
        />
      )}
    </div>
  );
};
