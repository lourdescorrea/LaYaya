import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  Card,
  LoadingButton,
  RHFTextField,
  RhfForm,
  api,
  useSubmitTrpc,
} from "yaya/core";
import { en, saleCreateSchema } from "yaya/shared";
import { SaleCreate } from "yaya/shared/types/sales";

export const SaleCreatePage = () => {
  const methods = useForm<SaleCreate>({
    defaultValues: {},
    resolver: yupResolver(saleCreateSchema),
  });

  const { onSubmit, isLoading: createLoading } = useSubmitTrpc({
    trpc: api.sales.create,
    errorMsg: `${en.admin.sale.create.messages.error}`,
    successMsg: `${en.admin.sale.create.messages.success}`,
    onSuccess: () => {
      console.log("venta con error ", onSubmit);
    },
  });

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Creación de productos "
    >
      <RhfForm methods={methods} onSubmit={onSubmit}>
        {/* SE CARGA POR DEFECTO  */}
        <RHFTextField name={"usuario"} />
        {/* PONER LOCAL QUE SE DEBE CARGAR POR DEFECTO  */}
        {/* DATE CALENDARIO  */}
        <RHFTextField name={"fecha"} />
        {/* Lo deberia decir solo en el view que este desabilitado  */}
        <RHFTextField name={"status"} />
        
        <RHFTextField name={"monto"} />

      {/* Va ser un select */}
        <RHFTextField name={"metodo de pago"} />
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
