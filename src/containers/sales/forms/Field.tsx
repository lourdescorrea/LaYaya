import { useFieldArray } from "react-hook-form";
import { Button, RHFTextField, api } from "yaya/core";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "yaya/core/components/form/components/fields/Select";
import { en } from "yaya/shared";

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
    <div className="flex w-full  flex-col ">
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
                name={`products[${index}].quantity`}
                placeholder={en.admin.sale.fields.quantity.title}
                type="number"
              />
              <Button
                className="w-52"
                type="button"
                onClick={() => remove(index)}
              >
                {en.admin.product.delete.messages.success}
              </Button>
            </div>
          </div>
        );
      })}

      <div className="p-4">
        <p>
          {en.admin.sale.fields.totals.title}
          {getTotal()}
        </p>
      </div>
    </div>
  );
};
