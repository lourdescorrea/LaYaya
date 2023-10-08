import { ProductsField } from "./ProductsField";
import { ProductModal } from "./ProductsField/modal/ProductModal";
import { useProductsField } from "./ProductsField/useProductsField";
import { useSession } from "next-auth/react";
import { RHFSelectField, Typography, formatCurrency } from "yaya/core";
import { PAYMENT_OPTIONS, PERMISSIONS, SHOPS_OPTIONS, en } from "yaya/shared";

interface Props {
  isView?: boolean;
  paymentMethod?: string;
}

export const SaleFields = ({ isView, paymentMethod }: Props) => {
  const { data } = useSession();
  const { append, fields, remove, total, selectedShop } = useProductsField();

  if (!data) {
    return null;
  }

  return (
    <div>
      <div className="mb-4">
        <div className="flex  space-x-4 w-full">
          <RHFSelectField
            name="shop"
            label={en.admin.sale.fields.shop.title}
            placeholder={"Shop"}
            disabled={
              !PERMISSIONS.ADMINS.includes(data?.user.role ?? "") || isView
            }
            options={SHOPS_OPTIONS}
            defaultValue={data?.user.shops[0]}
          />

          <RHFSelectField
            name="paymentMethod"
            label={en.admin.sale.fields.paymentMethod.title}
            placeholder={"Metodo de pago"}
            options={PAYMENT_OPTIONS}
            defaultValue={paymentMethod}
            disabled={isView}
          />
        </div>
        {!isView && (
          <div className="flex justify-center items-center space-x-2 border mt-6 border-slate-600 p-4">
            <Typography variant="muted">
              Para agregar productos, escanee el codigo de barra o haga click
              aqui
            </Typography>
            <div className="mt-2">
              <ProductModal
                append={append}
                fields={fields}
                remove={remove}
                isView={isView}
              />
            </div>
          </div>
        )}

        <div className="border-solid border border-white mt-10">
          <ProductsField
            fields={fields}
            remove={remove}
            selectedShop={selectedShop}
            isView={isView}
          />

          <div className="flex justify-between h-11 border-t-[1px] border-white items-center space-x-2 w-full">
            <Typography variant="large" className="p-4">
              Total:
            </Typography>
            <Typography variant="small" className="p-4">
              {formatCurrency(total)}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
