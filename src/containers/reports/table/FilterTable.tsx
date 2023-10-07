/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Button, RHFSelectField, RHFTextField, RhfForm } from "yaya/core";
import { PERMISSIONS, SHOPS_OPTIONS, en } from "yaya/shared";

//TODO: Type
export const FilterTable = ({ setFilters }: any) => {
  const { data } = useSession();

  const methods = useForm({
    defaultValues: {
      shop: data?.user.shops[0],
      min: 1,
      max: 10,
    },
  });

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    <RhfForm methods={methods} onSubmit={(data) => setFilters(data)}>
      <div className="flex flex-col sm:flex-row space-x-4 items-center">
        <div className="w-full sm:w-40">
          <RHFSelectField
            name="shop"
            label={en.admin.sale.fields.shop.title}
            placeholder={data?.user.shops[0]}
            disabled={!PERMISSIONS.ADMINS.includes(data?.user.role ?? "")}
            options={SHOPS_OPTIONS}
          />
        </div>

        <div className="w-full sm:w-40">
          <RHFTextField type="number" name="min" label="min" min="0" />
        </div>

        <div className="w-full sm:w-40">
          <RHFTextField type="number" name="max" label="max" min="0" />
        </div>

        <Button type="submit" className="mt-6 w-full sm:w-40">
          Buscar
        </Button>
      </div>
    </RhfForm>
  );
};
