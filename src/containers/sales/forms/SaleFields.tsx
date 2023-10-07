import { ProductsField } from "./ProductsField";
import { ProductModal } from "./ProductsField/modal/ProductModal";
import { useProductsField } from "./ProductsField/useProductsField";
import { useSession } from "next-auth/react";
import { RHFSelectField, Typography, formatCurrency } from "yaya/core";
import { PAYMENT_OPTIONS, PERMISSIONS, SHOPS_OPTIONS, en } from "yaya/shared";

export const SaleFields = () => {
  const { data } = useSession();
  const { append, fields, remove, total, selectedShop } = useProductsField();

  if (!data) {
    return null;
  }

  return (
    <div className="mb-4">
      <div className="flex space-x-2 justify-center items-center">
        <Typography variant="muted">
          Para agregar productos, escanee el codigo de barra o haga click aqui
        </Typography>
        <ProductModal append={append} fields={fields} remove={remove} />
      </div>

      <div className="flex space-x-4 w-full">
        <RHFSelectField
          name="shop"
          label={en.admin.sale.fields.shop.title}
          placeholder={"Shop"}
          disabled={!PERMISSIONS.ADMINS.includes(data?.user.role ?? "")}
          options={SHOPS_OPTIONS}
          defaultValue={data?.user.shops[0]}
        />

        <RHFSelectField
          name="paymentMethod"
          label={en.admin.sale.fields.paymentMethod.title}
          placeholder={"Metodo de pago"}
          options={PAYMENT_OPTIONS}
        />
      </div>

      <div className="flex space-x-2 w-full justify-center items-center my-4">
        <Typography variant="small">
          El total a cobrar es: {formatCurrency(total)}
        </Typography>
      </div>

      <ProductsField
        fields={fields}
        remove={remove}
        selectedShop={selectedShop}
      />
    </div>
  );
};
