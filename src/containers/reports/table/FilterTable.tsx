import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Button, RHFSelectField, RHFTextField, RhfForm } from "yaya/core";
import { PERMISSIONS, SHOPS_OPTIONS, en } from "yaya/shared";

// TODO: ADD TYPES
export const FilterTable = ({ setFilters }: any) => {
  const { data } = useSession();

  const methods = useForm({
    defaultValues: {},
  });

  return (
    <RhfForm methods={methods} onSubmit={(data) => setFilters(data)}>
      <div className="flex flex-col   ">
        <div className="w-40 ">
          <RHFSelectField
            name="shop"
            label={en.admin.sale.fields.shop.title}
            placeholder={data?.user.shops}
            disabled={!PERMISSIONS.ADMINS.includes(data?.user.role || "")}
            options={SHOPS_OPTIONS}
          />
        </div>

        <div className="w-40 ">
          <RHFTextField type="number" name="min" label="min" min="0" />
        </div>

        <div className="w-40">
          <RHFTextField type="number" name="max" label="max" min="0" />
        </div>

        <Button className="mt-4" type="submit" variant="link">
          Buscar
        </Button>
      </div>
    </RhfForm>
  );
};
