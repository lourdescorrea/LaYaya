import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  LoadingButton,
  RHFTextField,
  RhfForm,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  api,
  useSubmitTrpc,
} from "yaya/core";
import { brandUpdateSchema, en, type Brand, type BrandEdit } from "yaya/shared";

interface BrandEditFormProps {
  open: boolean;
  data: Brand;
  onToggle: (v: boolean) => void;
}

export const BrandEditForm = ({ open, onToggle, data }: BrandEditFormProps) => {
  const methods = useForm<BrandEdit>({
    defaultValues: data,
    resolver: yupResolver(brandUpdateSchema),
  });

  const { onSubmit, isLoading } = useSubmitTrpc({
    trpc: api.brands.edit,
    errorMsg: `${en.admin.brand.create.messages.error}`,
    successMsg: `${en.admin.brand.create.messages.success}`,
    onSuccess: (data, vars) => {
      onToggle(false);
    },
  });

  return (
    <Sheet onOpenChange={onToggle} open={open}>
      <SheetContent>
        <RhfForm methods={methods} onSubmit={onSubmit}>
          <SheetHeader>
            <SheetTitle>Editar Marca</SheetTitle>
            <SheetDescription>Editar</SheetDescription>
          </SheetHeader>
          <RHFTextField
            name="name"
            description=""
            label=""
            placeholder="escribe una Marca"
          />
          <SheetFooter>
            <LoadingButton loading={isLoading} type="submit">
              Guardar Edición
            </LoadingButton>
          </SheetFooter>
        </RhfForm>
      </SheetContent>
    </Sheet>
  );
};
