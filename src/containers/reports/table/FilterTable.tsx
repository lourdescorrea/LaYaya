import { useForm } from "react-hook-form";
import { Button, RHFSelectField, RHFTextField, RhfForm } from "yaya/core";
import { PERMISSIONS, SHOPS_OPTIONS, en } from "yaya/shared";

interface Props {
  setFilters: (data: any) => void;
  shop: string;
  role: string;
}
export const FilterTable = ({ setFilters, shop, role }: Props) => {
  const methods = useForm({
    defaultValues: {
      shop,
      min: 1,
      max: 10,
    },
  });

  console.log(shop);

  return (
    <RhfForm methods={methods} onSubmit={(data) => setFilters(data)}>
      <div className="flex flex-col sm:flex-row space-x-4 items-center">
        <div className="w-full sm:w-40">
          <RHFSelectField
            name="shop"
            label={en.admin.sale.fields.shop.title}
            placeholder={shop}
            disabled={!PERMISSIONS.ADMINS.includes(role ?? "")}
            options={SHOPS_OPTIONS}
            defaultValue={shop}
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
