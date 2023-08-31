import { RHFSelectField, RHFTextField, RHFileUpload, api } from "yaya/core";

export const ProductFields = () => {
  const { data } = api.brands.getAll.useQuery(undefined, {
    initialData: [],
  });

  const brandOptions = data.map((brand) => ({
    label: brand.name,
    value: brand.id,
  }));

  return (
    <>
      <div className="flex justify-evenly">
        <RHFileUpload name="imagen " label="" description="" />

        <div className="ml-[40px] flex flex-col ">
          <div className="w-96">
            <RHFTextField
              label="Nombre del producto"
              placeholder="Producto"
              type="text"
              name="name"
            />
          </div>

          <div className="w-96">
            <RHFTextField
              label="Precio del producto"
              placeholder="Precio $$"
              type="number"
              name="price"
            />
          </div>
          <div className="w-96">
            <RHFSelectField
              name="brand"
              label="Marca del producto"
              placeholder="Marca"
              options={brandOptions}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <div className=" w-96">
          <RHFTextField
            label="Kilos del producto"
            placeholder="Kilos"
            type="number"
            name="weight"
          />
        </div>
        <div className="w-96">
          <RHFTextField
            label="Stock del producto"
            placeholder="Stock"
            type="number"
            name="stock"
          />
        </div>
      </div>
    </>
  );
};
