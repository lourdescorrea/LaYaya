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
import { en, saleCreateSchema } from "yaya/shared";
import { SaleCreate } from "yaya/shared/types/sales";
import { SaleFields } from "./forms";

export const SaleForm = () => {
  const { push } = useRouter();

  // const { data } = useSession();

  const methods = useForm<SaleCreate>({
    defaultValues: {
      shop: "",
      paymentMethod: "",
      productsOnSale: [],
    },
    resolver: yupResolver(saleCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.sales.create,
    errorMsg: `${en.admin.sale.create.messages.error}`,
    successMsg: `${en.admin.sale.create.messages.success}`,
    onSuccess: () => {
      push(paths.sales.root);
    },
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title={en.admin.sale.cta}
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        <div className="flex flex-col">
          <SaleFields />
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
