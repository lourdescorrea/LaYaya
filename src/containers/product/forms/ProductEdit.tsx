import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Card } from "yaya/core";
import { ProductEdit, productUpdateSchema } from "yaya/shared";
import { ProductCreateForm } from "./fields/FormProducts";

export const ProductEditForm = () => {
  const methods = useForm<ProductEdit>({
    defaultValues: {
      brand: undefined,
      code: undefined,
      name: "",
      price: undefined,
      stock: undefined,
      weight: undefined,
    },
    resolver: yupResolver(productUpdateSchema),
  });
  return (
    <Card className="" title="Edición de productos ">
      <ProductCreateForm />
    </Card>
  );
};
