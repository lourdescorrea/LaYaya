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
    errorMsg: "Algo salio mal", // TODO: Move this to the text file
    successMsg: "Todo bien", // TODO: Move this to the text file
    onSuccess: (data, vars) => {
      // TODO: REMOVE THIS
      console.log("esta funcion se ejecuta si todo sale bien");
      console.log("tiene la data que devuelve el backend: ", data);
      console.log("tiene las vars que se mandaron al backend: ", vars);
      onToggle(false);
    },
  });

  return (
    <Sheet onOpenChange={onToggle} open={open}>
      <SheetContent>
        <RhfForm methods={methods} onSubmit={onSubmit}>
          <SheetHeader>
            <SheetTitle>{en.admin.secrets.create.title}</SheetTitle>
            <SheetDescription>Sub titulo</SheetDescription>
          </SheetHeader>
          <RHFTextField
            name="name"
            description="Esto es una description"
            label="Label"
            placeholder="Placeholder"
          />
          <SheetFooter>
            <LoadingButton loading={createLoading} type="submit">
              Guardar
            </LoadingButton>
          </SheetFooter>
        </RhfForm>
      </SheetContent>
    </Sheet>
  );
};
