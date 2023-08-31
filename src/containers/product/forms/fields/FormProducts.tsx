import { yupResolver } from "@hookform/resolvers/yup";
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
import { ProductCreate, en, productCreateSchema } from "yaya/shared";

// interface TableProps<T> extends TableArgs<T> {
//   title?: string;
//   loading?: boolean;
// }

export const ProductCreateForm = () => {
  // const { title, loading, ...args } = props;
  // const { topAction } = useTable<T>(args);

  const { data } = api.brands.getAll.useQuery(undefined, {
    initialData: [],
  });

  const brandOptions =
    data?.map((brand: { name: any; id: any }) => ({
      label: brand.name,
      value: brand.id,
    })) || [];

  const methods = useForm<ProductCreate>({
    defaultValues: {
      brand: undefined,
      code: undefined,
      name: "",
      price: undefined,
      stock: undefined,
      weight: undefined,
    },
    resolver: yupResolver(productCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    // onSuccess: (data, vars) => {},
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Creación de productos "
    >
      <RhfForm methods={methods} onSubmit={onSubmit as any}>
        <div className="flex flex-col">
          <div className=" flex justify-evenly ">
            <RHFileUpload name="imagen " label="" description="" />

            <div className="ml-[40px] flex flex-col ">
              <div className="w-96">
                <RHFTextField
                  label="Nombre del producto"
                  placeholder="Producto"
                  type="text"
                  name="name"
                />
              </div>

              <div className="w-96">
                <RHFTextField
                  label="Precio del producto"
                  placeholder="Precio $$"
                  type="number"
                  name="price"
                />
              </div>
              <div className="w-96">
                <RHFSelectField
                  name="brand"
                  label="Marca del producto"
                  placeholder="Marca"
                  options={brandOptions}
                />
              </div>
            </div>
          </div>

          <div className="flex  justify-center  space-x-4">
            <div className=" w-96">
              <RHFTextField
                label="Kilos del producto"
                placeholder="Kilos"
                type="number"
                name="weight"
              />
            </div>
            <div className="w-96">
              <RHFTextField
                label="Stock del producto"
                placeholder="Stock"
                type="number"
                name="stock"
              />
            </div>
          </div>
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
