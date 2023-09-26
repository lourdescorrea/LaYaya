import { RHFSelectField, RHFTextField, RHFileUpload, api } from "yaya/core";
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
    <div className="flex justify-evenly">
      <div className="flex flex-col items-center">
        <div>
          <RHFileUpload name="image" label="" description="" />
        </div>
        <div className="flex space-x-4">
          <div className="w-24">
            <RHFTextField
              label={en.admin.product.fields.stockDuarte.label}
              placeholder={en.admin.product.fields.stockDuarte.placeholder}
              type="number"
              name="stockDuarte"
            />
          </div>
          <div className="w-24">
            <RHFTextField
              label={en.admin.product.fields.stockColon.label}
              placeholder={en.admin.product.fields.stockColon.placeholder}
              type="number"
              name="stockColon"
            />
          </div>
          <div className="w-24">
            <RHFTextField
              label={en.admin.product.fields.stockDeposito.label}
              placeholder={en.admin.product.fields.stockDeposito.placeholder}
              type="number"
              name="stockDeposito"
            />
          </div>
        </div>
      </div>

      <div className="ml-[40px] flex w-96 flex-col ">
        <div className="flex space-x-10">
          <RHFTextField
            label={en.admin.product.fields.price.label}
            placeholder={en.admin.product.fields.price.placeholder}
            type="number"
            name="price"
          />

          <RHFTextField
            label={en.admin.product.fields.weight.label}
            placeholder={en.admin.product.fields.weight.placeholder}
            type="number"
            name="weight"
          />
        </div>
        <RHFTextField
          label={en.admin.product.fields.name.label}
          placeholder={en.admin.product.fields.name.placeholder}
          type="string"
          name="name"
        />
        <RHFSelectField
          name="brandId"
          label={en.admin.product.fields.brand.placeholder}
          placeholder="Marca"
          options={brandOptions}
        />

        <RHFTextField
          label={en.admin.product.fields.codeBar.label}
          placeholder={en.admin.product.fields.codeBar.placeholder}
          type="number"
          name="codeBar"
        />
      </div>
    </div>
  );
};
