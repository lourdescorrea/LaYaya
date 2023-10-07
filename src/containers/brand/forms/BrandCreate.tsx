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
import { brandCreateSchema, en, type BrandCreate } from "yaya/shared";

interface BrandEditFormProps {
  open: boolean;
  onToggle: (v: boolean) => void;
}

export const BrandCreateForm = ({ open, onToggle }: BrandEditFormProps) => {
  const methods = useForm<BrandCreate>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(brandCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.brands.create,
    errorMsg: `${en.admin.brand.create.messages.error}`,
    successMsg: `${en.admin.brand.create.messages.success}`,
    onSuccess: () => onToggle(false),
  });

  return (
    <Sheet onOpenChange={onToggle} open={open}>
      <SheetContent>
        <RhfForm methods={methods} onSubmit={onSubmit}>
          <SheetHeader>
            <SheetTitle> {en.admin.brand.create.title}</SheetTitle>
            <SheetDescription>
              {en.admin.brand.create.sub_title}
            </SheetDescription>
          </SheetHeader>
          <RHFTextField
            name="name"
            description={en.admin.brand.fields.name.description}
            label={en.admin.brand.fields.name.label}
            placeholder={en.admin.brand.fields.name.placeholder}
          />
          <SheetFooter>
            <LoadingButton loading={createLoading} type="submit">
              {en.common.save}
            </LoadingButton>
          </SheetFooter>
        </RhfForm>
      </SheetContent>
    </Sheet>
  );
};
