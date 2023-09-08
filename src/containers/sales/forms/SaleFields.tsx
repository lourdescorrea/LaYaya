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

export const SaleFields = () => {
  const { push } = useRouter();

  const methods = useForm<ProductCreate>({
    resolver: yupResolver(productCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    onSuccess: () => {
      console.log("Producto con error ", onSubmit);
      push(paths.product.root);
    },
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Creación de productos "
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
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
