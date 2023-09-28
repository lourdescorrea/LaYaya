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
      <div className="flex space-x-4 items-center">
        <RHFSelectField
          name="shop"
          label={en.admin.sale.fields.shop.title}
          placeholder={data?.user.shops}
          disabled={!PERMISSIONS.ADMINS.includes(data?.user.role || "")}
          options={SHOPS_OPTIONS}
        />

        <div className="w-32">
          <RHFTextField type="number" name="min" label="min" min="0" />
        </div>

        <div className="w-32">
          <RHFTextField type="number" name="max" label="max" min="0" />
        </div>

        <Button type="submit">Enviar</Button>
      </div>
    </RhfForm>
  );
};
