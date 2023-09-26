import { useSession } from "next-auth/react";
import { RHFSelectField } from "yaya/core";
import { PAYMENT_OPTIONS, PERMISSIONS, SHOPS_OPTIONS, en } from "yaya/shared";
import { ProductFieldsArray } from "./ProductFieldsArray";

export const SaleFields = () => {
  const { data } = useSession();
  return (
    <div>
      <RHFSelectField
        name="shop"
<<<<<<< HEAD
        label="Local"
        placeholder="Seleccionar Local"
=======
        label={en.admin.sale.fields.shop.title}
        placeholder={data?.user.shops}
>>>>>>> 3b86e87b3d810cd620ca0d5e54dbd044c7d696af
        disabled={!PERMISSIONS.ADMINS.includes(data?.user.role || "")}
        options={SHOPS_OPTIONS}
      />
      <div>
        <RHFSelectField
          name="paymentMethod"
          label={en.admin.sale.fields.paymentMethod.title}
          placeholder={""}
          options={PAYMENT_OPTIONS}
        />
      </div>

      <div>
        <ProductFieldsArray />
      </div>
    </div>
  );
};
