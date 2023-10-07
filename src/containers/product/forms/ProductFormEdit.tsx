import { ProductFields } from ".";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  Button,
  LoadingButton,
  RhfForm,
  api,
  paths,
  useSubmitTrpc,
} from "yaya/core";
import { en, productUpdateSchema, type ProductEdit } from "yaya/shared";

//TODO: Type props
export const ProductEditForm = (props: any) => {
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

        <div className="flex space-x-4 justify-end">
          <Button
            variant="outline"
            type="button"
            className="w-32"
            onClick={() => push(paths.product.root)}
          >
            {en.common.go_back}
          </Button>
          <LoadingButton className="w-32" loading={isLoading} type="submit">
            {en.common.save}
          </LoadingButton>
        </div>
      </div>
    </RhfForm>
  );
};
