import { useFieldArray } from "react-hook-form";
import { Button, RHFTextField, api } from "yaya/core";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "yaya/core/components/form/components/fields/Select";

export const ProductFieldsArray = () => {
  const { data } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const ProductOptions = data.map((product) => ({
    label: product.name,
    value: product.id,
  }));

  const { fields, append, remove } = useFieldArray({
    name: "productsOnSale",
  });

  const handleProductChange = (productId: string) =>
    append({ productId, quantity: 1 });

  const getTotal = () => {
    let total = 0;

    fields.forEach((field: any) => {
      const product = data.find((p) => p.id === field.productId);
      if (product) {
        total += product.price * field.quantity;
      }
    });

    return total;
  };

  return (
    <div className="flex flex-col  w-full ">
      <div className="flex items-center justify-center space-x-2">
        <Select onValueChange={handleProductChange} defaultValue={"Productos"}>
          <SelectTrigger>
            <SelectValue placeholder={"place holder"} />
          </SelectTrigger>

          <SelectContent>
            {ProductOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {fields.map((field: any, index) => {
        const product = data.find((p) => p.id === field.productId);

        return (
          <div className="flex items-center justify-center p-8" key={field.id}>
            <div className="space-x-2">
              {product?.name}
              <p>${product?.price}</p>

              <RHFTextField
                name={`productsOnSale[${index}].quantity`}
                placeholder="Cantidad"
                type="number"
                defaultValue={field.quantity}
              />
              <Button
                className="w-52"
                type="button"
                onClick={() => remove(index)}
              >
                Eliminar Producto
              </Button>
            </div>
          </div>
        );
      })}

      <div className="p-4">
        <p>Total de la venta: ${getTotal()}</p>
      </div>
    </div>
  );
};
