import { useSession } from 'next-auth/react';
import { RHFSelectField } from 'yaya/core';
import { PAYMENT_OPTIONS, PERMISSIONS, SHOPS_OPTIONS } from "yaya/shared";
import { UseFields } from './UseFields';

export const SaleFields =() => {
   const {data}= useSession()
  return (
    <div>
      <RHFSelectField
        name="shopId"
        label="Local"
        placeholder={data?.user.name || ""}
        disabled={!PERMISSIONS.ADMINS.includes(data?.user.role || "")}
        options={SHOPS_OPTIONS}
      />

      <div>
        <UseFields/>
      </div>

      <div>
        <RHFSelectField name="paymentMethod" label="" placeholder="" options={PAYMENT_OPTIONS}/>
      </div>
    </div>
  );
};

