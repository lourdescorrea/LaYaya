import {
  RHFSelectField,
  RHFTextField,
  RHFileUpload,
  Typography,
  api,
} from "yaya/core";
import { en } from "yaya/shared";

export const ProductFields = () => {
  const { data } = api.brands.getAll.useQuery(undefined, {
    initialData: [],
  });

  const brandOptions = data.map((brand) => ({
    label: brand.name,
    value: brand.id,
  }));

  return (
    <div className="flex p-2 space-x-12 items-center">
      <div className="flex flex-col items-center border-r-2 border-white pr-8">
        <div className="mb-8">
          <RHFileUpload name="image" label="" description="" />
        </div>
        <div className="w-64">
          <RHFTextField
            label={en.admin.product.fields.name.label}
            placeholder={en.admin.product.fields.name.placeholder}
            type="string"
            name="name"
          />
        </div>
        <div className="w-64">
          <RHFSelectField
            name="brandId"
            label={en.admin.product.fields.brand.placeholder}
            placeholder="Marca"
            options={brandOptions}
          />
        </div>
      </div>

      <div>
        <div>
          <Typography className="mb-4" variant="large">
            Datos del producto
          </Typography>
          <div className="flex space-x-4">
            <div className="w-54">
              <RHFTextField
                label={en.admin.product.fields.price.label}
                placeholder={en.admin.product.fields.price.placeholder}
                type="number"
                name="price"
                min="0"
              />
            </div>
            <div className="w-54">
              <RHFTextField
                label={en.admin.product.fields.weight.label}
                placeholder={en.admin.product.fields.weight.placeholder}
                type="number"
                name="weight"
                min="0"
              />
            </div>
            <div className="w-54">
              <RHFTextField
                label={en.admin.product.fields.codeBar.label}
                placeholder={en.admin.product.fields.codeBar.placeholder}
                type="number"
                name="codeBar"
              />
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Typography variant="large">Distribución del local</Typography>
          <div className="flex space-x-4">
            <div className="w-54">
              <RHFTextField
                label={en.admin.product.fields.stockDuarte.label}
                placeholder={en.admin.product.fields.stockDuarte.placeholder}
                type="number"
                name="stockDuarte"
                min="0"
              />
            </div>

            <div className="w-54">
              <RHFTextField
                label={en.admin.product.fields.stockColon.label}
                placeholder={en.admin.product.fields.stockColon.placeholder}
                type="number"
                name="stockColon"
                min="0"
              />
            </div>
            <div className="w-54">
              <RHFTextField
                label={en.admin.product.fields.stockDeposito.label}
                placeholder={en.admin.product.fields.stockDeposito.placeholder}
                type="number"
                name="stockDeposito"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
