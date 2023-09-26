import { SaleFields } from "./forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { LoadingButton, RhfForm, api, paths, useSubmitTrpc } from "yaya/core";
import { en, saleCreateSchema } from "yaya/shared";
import { SaleCreate } from "yaya/shared/types/sales";

export const SaleCreatePage = (props: any) => {
  const { push } = useRouter();
  const { data } = useSession();

  const methods = useForm<SaleCreate>({
    defaultValues: {
      ...props.data,
      shop: data?.user.shops[0],
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
    <>
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
    </>
  );
};
