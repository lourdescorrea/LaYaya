import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { LoadingButton, RhfForm, api, paths, useSubmitTrpc } from "yaya/core";
import { ProductEdit, en, productUpdateSchema } from "yaya/shared";
import { ProductFields } from "./forms";

export const ProductForm = (props: any) => {
  const { push } = useRouter();

  const methods = useForm<ProductEdit>({
    defaultValues: {
      ...props.data,
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
  );
};