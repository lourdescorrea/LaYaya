import { ProductEditForm } from "./forms/ProductFormEdit";
import { useRouter } from "next/router";
import { Card, api } from "yaya/core";
import { en } from "yaya/shared";

export const ProductEditPage = () => {
  const { query } = useRouter();

  const productId = query.id as string;

  const { data } = api.products.getById.useQuery(
    { id: productId },
    { enabled: !!productId }
  );

  return (
    <Card
      className="border-2 bg-slate-200 p-8 pb-10"
      title={en.admin.product.edit.title}
    >
      {data && <ProductEditForm data={data} />}
    </Card>
  );
};
