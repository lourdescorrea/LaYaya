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
      <>
        {fields.map((field, index) => (
          <div key={field.id}>
              <div className="w-36">
               <RHFTextField
                 name={`products[${index}].id`}
                 placeholder="ID del producto"
                />
               <RHFTextField
                  name={`products[${index}].cantidad`}
                  placeholder="Cantidad"
                  type="number"
                 />
              </div>
              <div className="space-x-4">
              <Button type="button" onClick={() => remove(index)}>
                Eliminar Producto
              </Button>
              <Button type="button" onClick={() => append({ id: "", cantidad: 1 })}>
                Agregar Producto
              </Button>
              </div>
          </div>
        ))}
      </>
  );
};


// <RHFSelectField
//               {...methods.register(`products[${index}].id`)}
//               placeholder="Seleccionar producto"
//             >
//               {data.map((product) => (
//                 <option key={product.id} value={product.id}>
//                   {product.name} 
//                 </option>
//               ))}
//             </RHFSelectField>