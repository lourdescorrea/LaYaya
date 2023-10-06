import { ProductForm } from "./ProductForm";
import { useRouter } from "next/router";
import { Card, api } from "yaya/core";

export const ProductEditPage = () => {
  const { query } = useRouter();

  const productId = query.id as string;

  const { data } = api.products.getById.useQuery(
    { id: productId },
    { enabled: !!productId }
  );

  return (
    <Card
      className="border-2  bg-slate-200 p-8 pb-10"
      title="Edición de productos"
    >
      {data && <ProductForm data={data} />}
    </Card>
  );
};
