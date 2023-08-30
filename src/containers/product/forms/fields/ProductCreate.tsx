import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import {
  Card,
  LoadingButton,
  RHFSelectField,
  RHFTextField,
  RHFileUpload,
  RhfForm,
  api,
  useSubmitTrpc,
} from "yaya/core";
import { TableArgs, useTable } from "yaya/core/components/table/hooks/useTable";
import { ProductCreate, en, productCreateSchema } from "yaya/shared";

interface TableProps<T> extends TableArgs<T> {
  title?: string;
  loading?: boolean;
}

export const ProductCreateForm = <T,>(props: TableProps<T>) => {
  const { title, loading, ...args } = props;
  const { topAction } = useTable<T>(args);
  const { data: Brand } = useQuery(["/api/brand"]);

  const methods = useForm<ProductCreate>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(productCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    onSuccess: (data, vars) => {},
  });

  return (
    <Card
      className="h-full w-8/12 bg-slate-200 p-4 pb-10"
      title="prueba"
      topAction={topAction}
    >
      <RhfForm methods={methods} onSubmit={onSubmit as any}>
        <div className="flex justify-evenly">
          <div className="w-96 ">
            <RHFileUpload name="imagen " label="" description="" />
          </div>

          <div>
            <div className="w-96">
              <RHFTextField
                label="Nombre del producto"
                placeholder="hola2"
                type="hola3"
                name="Nombre del producto "
              />
            </div>

            <div className="w-96">
              <RHFTextField
                label="Precio"
                placeholder="hola2"
                type="hola3"
                name="Precio"
              />
            </div>
          </div>
        </div>
        <div className=" flex  justify-evenly">
          <div className="w-96">
            <RHFTextField
              label="Kilos"
              placeholder="hola2"
              type="hola3"
              name="Kilos"
            />
          </div>
          <div className="w-96">
            <RHFSelectField
              name="Marcas"
              label="Marcas"
              placeholder="hola2"
              options={[{ label: Brand, value: "id" }]}
            />
          </div>
        </div>

        <LoadingButton
          className="ml-[845px]"
          loading={createLoading}
          type="submit"
        >
          {en.common.save}
        </LoadingButton>
      </RhfForm>
    </Card>
  );
};
