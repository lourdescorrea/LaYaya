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
    <div className="flex justify-evenly">
      <div className="flex flex-col items-center">
        <div>
          <RHFileUpload name="image" label="" description="" />
        </div>
        <div className="flex space-x-4">
          <div className="w-24">
            <RHFTextField
              label="Stock Duarte"
              placeholder="Stock"
              type="number"
              name="stockDuarte"
              defaultValue={""}
            />
          </div>
          <div className="w-24">
            <RHFTextField
              label="Stock Colón"
              placeholder="Stock"
              type="number"
              name="stockColon"
              defaultValue={""}
            />
          </div>
          <div className="w-24">
            <RHFTextField
              label="Stock Deposito"
              placeholder="Stock"
              type="number"
              name="stockDeposito"
              defaultValue={""}
            />
          </div>
        </div>
      </div>

      <div className="ml-[40px] flex w-96 flex-col ">
        <div className="flex space-x-10">
          <RHFTextField
            label="Precio del producto"
            placeholder="Precio $$"
            type="number"
            name="price"
            defaultValue=""
          />

          <RHFTextField
            label="Kilos del producto"
            placeholder="Kilos"
            type="number"
            name="weight"
            defaultValue=""
          />
        </div>
        <RHFTextField
          label="Nombre del producto"
          placeholder="Producto"
          type="string"
          name="name"
          defaultValue=""
        />
        <RHFSelectField
          name="brandId"
          label="Marca del producto"
          placeholder="Marca"
          options={brandOptions}
        />

        <RHFTextField
          label="Código de barra"
          placeholder="Código"
          type="number"
          name="codeBar"
          defaultValue=""
        />
      </div>
    </div>
  );
};
