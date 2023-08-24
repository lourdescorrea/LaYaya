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
import { brandUpdateSchema } from "yaya/shared";

interface BrandEditFormProps {
  open: boolean;
  data: any; // todo define type from approuter output maybe?;
  onToggle: (v: boolean) => void;
}

export const BrandEditForm = ({ open, onToggle, data }: BrandEditFormProps) => {
  const methods = useForm({
    defaultValues: data,
    resolver: yupResolver(brandUpdateSchema),
  });

  const { onSubmit, isLoading } = useSubmitTrpc({
    trpc: api.brands.edit,
    errorMsg: "Algo salio mal",
    successMsg: "Todo bien",
    onSuccess: (data, vars) => {
      console.log("esta funcion se ejecuta si todo sale bien");
      console.log("tiene la data que devuelve el backend: ", data);
      console.log("tiene las vars que se mandaron al backend: ", vars);
      onToggle(false);
    },
  });

  // todo define type
  const submit = ({ name }: any) => {
    onSubmit({
      id: data.id,
      name,
    });
  };

  return (
    <Sheet onOpenChange={onToggle} open={open}>
      <SheetContent>
        <RhfForm methods={methods} onSubmit={submit}>
          <SheetHeader>
            <SheetTitle>Editar Marca </SheetTitle>
            <SheetDescription>Editar</SheetDescription>
          </SheetHeader>
          <RHFTextField
            name="name"
            description=" "
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
