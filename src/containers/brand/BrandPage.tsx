import "@uploadthing/react/styles.css";
import { BrandCreateForm } from "./forms";
import { BrandEditForm } from "./forms/BrandEdit";
import { BrandTable } from "./table/BrandTable";
import { useCreateSheet, useEditSheet } from "./useBrandPage";

export const BrandPage = () => {
  const create = useCreateSheet();
  const edit = useEditSheet();

  return (
    <div className="h-full w-full">
      <BrandTable openCreate={create.onOpen} openEdit={edit.onOpen} />
      <BrandCreateForm open={create.isOpen} onToggle={create.onToggle} />
      {edit.isOpen && edit.data && (
        <BrandEditForm
          open={edit.isOpen}
          onToggle={edit.onToggle}
          data={edit.data}
        />
      )}
    </div>
  );
};
