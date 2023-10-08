import { SaleFields } from ".";
import { useRouter } from "next/router";
import {
  Button,
  LoadingButton,
  RhfForm,
  api,
  paths,
  useSubmitTrpc,
} from "yaya/core";
import { en } from "yaya/shared";

//TODO: Type props
export const SaleViewForm = (props: any) => {
  const { push } = useRouter();

  const methods = {
    defaultValues: {
      ...props.data,
    },
  };

  const { onSubmit, isLoading } = useSubmitTrpc({
    trpc: api.products.edit,
    errorMsg: `${en.admin.sale.view.messages.error}`,
    successMsg: `${en.admin.sale.view.messages.success}`,
  });

  return (
    <RhfForm methods="" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <SaleFields />

        <div className="flex space-x-4 justify-end mt-4">
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
