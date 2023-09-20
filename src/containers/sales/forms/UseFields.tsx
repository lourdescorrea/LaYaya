import { useFieldArray } from "react-hook-form";
import { Button, RHFTextField, api } from "yaya/core";

export const UseFields = () => {
  const { data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const { fields, append, remove } = useFieldArray({
    name: "products",
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <div className="w-36">
            <RHFTextField
              name={`products[${index}].id`}
              placeholder="ID del producto"
              defaultValue={""}
            />
            <RHFTextField
              name={`products[${index}].cantidad`}
              placeholder="Cantidad"
              type="number"
              defaultValue={""}
            />
          </div>
          <div className="space-x-4">
            <Button type="button" onClick={() => remove(index)}>
              Eliminar Producto
            </Button>
            <Button
              type="button"
              onClick={() => append({ id: "", cantidad: 1 })}
            >
              Agregar Producto
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
