import { useRouter } from "next/router";
import { Card, api } from "yaya/core";
import { ProductForm } from "./ProductForm";

export const ProductEditPage = () => {
  const { query } = useRouter();

  const productId = query.id as string;

  const { data } = api.products.getById.useQuery(
    { id: productId },
    { enabled: !!productId }
  );

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Edición de productos"
    >
      {data && <ProductForm data={data} />}
    </Card>
  );
};

