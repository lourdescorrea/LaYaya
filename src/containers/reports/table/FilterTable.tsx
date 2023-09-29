import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Button, RHFSelectField, RHFTextField, RhfForm } from "yaya/core";
import { PERMISSIONS, SHOPS_STOCK, en } from "yaya/shared";

// TODO: ADD TYPES
export const FilterTable = ({ setFilters }: any) => {
  const { data } = useSession();

  const methods = useForm({
    defaultValues: {},
  });

  return (
    <RhfForm methods={methods} onSubmit={(data) => setFilters(data)}>
      <div className="flex items-center space-x-4">
        <RHFSelectField
          name="stock"
          label={en.admin.sale.fields.shop.title}
          placeholder="Stock"
          disabled={!PERMISSIONS.ADMINS.includes(data?.user.role || "")}
          options={SHOPS_STOCK}
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
