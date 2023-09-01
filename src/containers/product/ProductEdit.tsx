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
import { ProductEdit, en, productUpdateSchema } from "yaya/shared";
import { ProductFields } from "./forms";

export const ProductEditPage = () => {
  const { query, push } = useRouter();

  const productId: string | undefined = query.id as string;

  const existingProductData: ProductEdit | undefined =
    api.products.getById.useQuery({
      id: productId,
    }).data;

  const methods = useForm<ProductEdit>({
    defaultValues: {
      brand: "",
      code: 0,
      name: "",
      price: 0,
      stock: 0,
      weight: 0,
      ...existingProductData,
    },
    resolver: yupResolver(productUpdateSchema),
  });

  const { onSubmit, isLoading } = useSubmitTrpc({
    trpc: api.products.edit,
    errorMsg: `${en.admin.product.edit.messages.error}`,
    successMsg: `${en.admin.product.edit.messages.success}`,
    onSuccess: () => push(paths.product.root),
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Edición de productos "
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col">
          <ProductFields />
          <LoadingButton
            className="ml-[750px] mt-8 w-32"
            loading={isLoading}
            type="submit"
          >
            {en.common.save}
          </LoadingButton>
        </div>
      </RhfForm>
    </Card>
  );
};
