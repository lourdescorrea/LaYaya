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
import { brandCreateSchema } from "yaya/shared";

interface BrandCreateFormProps {
  open: boolean;
  onToggle: (v: boolean) => void;
}

export const BrandCreateForm = ({ open, onToggle }: BrandCreateFormProps) => {
  const methods = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(brandCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.brands.create,
    errorMsg: "Algo salio mal",
    successMsg: "Todo bien",
    onSuccess: (data, vars) => {
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
            <SheetTitle>Titulo</SheetTitle>
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
