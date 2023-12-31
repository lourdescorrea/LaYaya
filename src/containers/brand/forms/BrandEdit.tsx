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
    onSuccess: () => onToggle(false),
  });

  return (
    <Sheet onOpenChange={onToggle} open={open}>
      <SheetContent>
        <RhfForm methods={methods} onSubmit={onSubmit}>
          <SheetHeader>
            <SheetTitle>{en.admin.brand.edit.title}</SheetTitle>
            <SheetDescription>{en.admin.brand.edit.sub_title}</SheetDescription>
          </SheetHeader>
          <RHFTextField
            name="name"
            description={en.admin.brand.fields.name.description}
            label={en.admin.brand.fields.name.label}
            placeholder={en.admin.brand.fields.name.placeholder}
          />
          <SheetFooter>
            <LoadingButton loading={isLoading} type="submit">
              {en.common.save}
            </LoadingButton>
          </SheetFooter>
        </RhfForm>
      </SheetContent>
    </Sheet>
  );
};
