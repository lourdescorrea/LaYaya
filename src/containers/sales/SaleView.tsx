
import { useRouter } from "next/router";
import { Card, api } from "yaya/core";
import { SaleCreatePage } from "./SaleCreate";


export const SaleViewPage = () => {
  const { query } = useRouter();

  const salesId = query.id as string;

  const { data } = api.sales.getById.useQuery(
    { id: salesId },
    { enabled: !!salesId }
  );

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Edición de productos"
    >
      {data && <SaleCreatePage data={data} />}
    </Card>
  );
};

