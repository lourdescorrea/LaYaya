import { ProductFieldsArray } from "./ProductFieldsArray";
import { useSession } from "next-auth/react";
import { RHFSelectField, RHFTextField } from "yaya/core";
import { PAYMENT_OPTIONS, PERMISSIONS, SHOPS_OPTIONS } from "yaya/shared";

export const SaleFields = () => {
  const { data } = useSession();
  return (
    <div>
      <RHFTextField
        label="Usuario"
        placeholder={data?.user.name || ""}
        type="text"
        name="userId"
        defaultValue=""
      />
      <RHFSelectField
        name="shopId"
        label="Local"
        placeholder={data?.user.shops || ""}
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
      {/* <Typography variant="p">Total${totalProductPrice}</Typography> */}
      <div></div>
    </div>
  );
};

// state: yup.string().required(),
// amount:yup.number().required(),
// productonSaleId: yup.string().required(),
