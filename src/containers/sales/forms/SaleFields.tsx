import { ProductFieldsArray } from "./ProductFieldsArray";
import { useSession } from "next-auth/react";
import { RHFSelectField } from "yaya/core";
import { PAYMENT_OPTIONS, PERMISSIONS, SHOPS_OPTIONS } from "yaya/shared";

export const SaleFields = () => {
  const { data } = useSession();
  return (
    <div>
      <RHFSelectField
        name="shop"
        label="Local"
        placeholder={data?.user.shops}
        // defaultValue={data?.user.shops}
        disabled={!PERMISSIONS.ADMINS.includes(data?.user.role || "")}
        options={SHOPS_OPTIONS}
      />
      <div>
        <RHFSelectField
          name="paymentMethod"
          label="Elige un metodo de pago"
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
