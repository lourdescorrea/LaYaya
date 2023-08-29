import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  LoadingButton,
  RHFSelectField,
  RHFTextField,
  RHFileUpload,
  RhfForm,
  api,
  useSubmitTrpc,
} from "yaya/core";
import { ProductCreate, en, productCreateSchema } from "yaya/shared";

export const ProductCreateForm = () => {
  const methods = useForm<ProductCreate>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(productCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.brands.edit,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    onSuccess: (data, vars) => {},
  });

  return (
    <RhfForm methods={methods} onSubmit={p}>
      <RHFTextField
        label="Nombre del producto"
        placeholder="hola2"
        type="hola3"
        name="Nombre del producto "
      />
      <RHFileUpload name="imagen " label="hola" description="hola7" />

      <RHFTextField
        label="Precio"
        placeholder="hola2"
        type="hola3"
        name="Precio"
      />
      <RHFTextField
        label="Kilos"
        placeholder="hola2"
        type="hola3"
        name="Kilos"
      />
      <RHFTextField
        label="Código de barra"
        placeholder="hola2"
        type="hola3"
        name="Código de barra"
      />
      <RHFSelectField name="Marcas" options={[]} />

      <LoadingButton loading={createLoading} type="submit">
        {en.common.save}
      </LoadingButton>
    </RhfForm>
  );
};
