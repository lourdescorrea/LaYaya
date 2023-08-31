import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Card,
  LoadingButton,
  RhfForm,
  api,
  paths,
  useSubmitTrpc,
} from "yaya/core";
import { ProductCreate, en, productCreateSchema } from "yaya/shared";
import { ProductFields } from "./forms";

export const ProductEditPage = () => {
  const { push, query } = useRouter();
  // query.id = el id del producto a editar
  const methods = useForm<ProductCreate>({
    defaultValues: {
      brand: "",
      code: 0,
      name: "",
      price: 0,
      stock: 0,
      weight: 0,
    },
    resolver: yupResolver(productCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    onSuccess: () => push(paths.product.root),
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Creación de productos "
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col">
          <ProductFields />
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
