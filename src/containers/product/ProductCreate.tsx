import { ProductFields } from "./forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Button,
  Card,
  LoadingButton,
  RhfForm,
  api,
  paths,
  useSubmitTrpc,
} from "yaya/core";
import { en, productCreateSchema, type ProductCreate } from "yaya/shared";

export const ProductCreatePage = () => {
  const { push } = useRouter();

  const methods = useForm<ProductCreate>({
    defaultValues: {
      brandId: "",
      image: "",
      codeBar: "",
      name: "",
      price: 0,
      stockDuarte: 0,
      stockColon: 0,
      stockDeposito: 0,
      weight: 0,
    },
    resolver: yupResolver(productCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.products.create,
    errorMsg: `${en.admin.product.create.messages.error}`,
    successMsg: `${en.admin.product.create.messages.success}`,
    backPath: paths.product.root,
  });

  return (
    <Card
      className="border-2 bg-slate-200 p-8 pb-10"
      title={en.admin.product.create.title}
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col">
          <ProductFields />
          <div className="flex space-x-4 justify-end mt-4">
            <Button
              variant="outline"
              type="button"
              className="w-32"
              onClick={() => push(paths.product.root)}
            >
              {en.common.go_back}
            </Button>
            <LoadingButton
              className="w-32"
              loading={createLoading}
              type="submit"
            >
              {en.common.save}
            </LoadingButton>
          </div>
        </div>
      </RhfForm>
    </Card>
  );
};
