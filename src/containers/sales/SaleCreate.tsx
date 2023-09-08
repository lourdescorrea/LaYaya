import { yupResolver } from "@hookform/resolvers/yup";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Card,
  LoadingButton,
  RhfForm,
  api,
  useSubmitTrpc
} from "yaya/core";
import { ProductCreate, en, productCreateSchema } from "yaya/shared";

export const SaleCreatePage = () => {
  const { data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });


  const methods = useForm<ProductCreate>({
    resolver: yupResolver(productCreateSchema),
    defaultValues: {
   : [{ id: "", cantidad: 1 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: methods.control,
    name: "products",
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    onSuccess: () => {
      console.log("Producto con error ", onSubmit);
  
    },
  });


  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Creación de productos "
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <input
              {...methods.register(`products[${index}].id`)}
              placeholder="ID del producto"
            />
            <input
              {...methods.register(`products[${index}].cantidad`)}
              placeholder="Cantidad"
            />
            <button type="button" onClick={() => remove(index)}>
              Eliminar Producto
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ id: "", cantidad: 1 })}>
          Agregar Producto
        </button>
        <div className="flex flex-col">
          <LoadingButton
            className="ml-[750px] mt-8 w-32"
            loading={createLoading}
            type="submit"
          >
            {en.common.save}
          </LoadingButton>
        </div>
      </RhfForm>
    </Card>
  );
};
