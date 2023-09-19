import { useFieldArray } from "react-hook-form";
import { Button, RHFTextField, Typography, api } from "yaya/core";
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
    name: "products",
  });

  const handleProductChange = (productId: string) =>
    append({ productId, quantity: 1 });

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
      {fields.map((field, index) => {
        const product = data.find((p) => p.id === field.productId);
        // Obtén el precio directamente de la variable product
        const productPrice = product ? product.price : 0;

        // Calcula el precio total para el producto actual
        const totalProductPrice = field.quantity * productPrice;

        return (
          <div className="flex items-center justify-center p-8" key={field.id}>
            <div className="space-x-2">
              {product?.name}
              <p>${product?.price}</p>

              <RHFTextField
                name={`products[${index}].quantity`}
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

              <Typography variant="p">Total${totalProductPrice}</Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};
