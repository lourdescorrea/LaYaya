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
import { ProductCreate, en, productCreateSchema } from "yaya/shared";

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
    onSuccess: () => {
      console.log("Producto con error ", onSubmit);
      push(paths.product.root);
    },
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title={en.admin.product.cta}
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col">
          <ProductFields />
          <LoadingButton
            className="ml-[700px] mt-8 w-32"
            loading={createLoading}
            type="submit"
          >
            {en.common.save}
          </LoadingButton>
        </div>
      </RhfForm>
      <Button
        className="ml-[560px] mt-[-40px]  w-32"
        onClick={() => push(paths.product.root)}
      >
        Volver
      </Button>
    </Card>
  );
};
