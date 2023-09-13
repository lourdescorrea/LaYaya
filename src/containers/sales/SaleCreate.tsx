import { yupResolver } from "@hookform/resolvers/yup";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import {
  Card,
  LoadingButton,
  RhfForm,
  api,
  useSubmitTrpc
} from "yaya/core";
import { en, saleCreateSchema } from "yaya/shared";
import { SaleCreate } from "yaya/shared/types/sales";
import { SaleFields } from "./forms";


export const SaleCreatePage  = () => {
  const {data}= useSession()



  const methods = useForm<SaleCreate>({
    defaultValues: {
      // shopId:data?.user.name || "",
      state:"",
      amount :0,
      paymentMethod:"",
      productonSaleId:"",
    },
    resolver: yupResolver(saleCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.sales.create,
    errorMsg: `${en.admin.sale.create.messages.error}`,
    successMsg: `${en.admin.sale.create.messages.success}`,
    onSuccess: () => {
      console.log(data?.user);
    },
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Creación de ventas "
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
