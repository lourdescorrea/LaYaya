import { SaleFields } from "./forms";
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
import { en, saleCreateSchema, type SaleCreate } from "yaya/shared";

interface Props {
  shop: string;
}

export const SaleCreatePage = (props: Props) => {
  const { push } = useRouter();

  const methods = useForm<SaleCreate>({
    defaultValues: {
      shop: props.shop,
    },
    resolver: yupResolver(saleCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.sales.create,
    errorMsg: `${en.admin.sale.create.messages.error}`,
    successMsg: `${en.admin.sale.create.messages.success}`,
    backPath: paths.sales.root,
  });

  return (
    <Card
      className="h-full w-8/12 border-2 bg-slate-200 p-8 pb-10"
      title={en.admin.sale.create.title}
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col">
          <SaleFields />

          <div className="flex space-x-4 justify-end mt-12">
            <Button
              variant="outline"
              className="w-32"
              onClick={() => push(paths.sales.root)}
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
