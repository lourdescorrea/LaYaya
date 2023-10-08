import { SaleViewForm } from "./forms";
import { useRouter } from "next/router";
import { Card, api } from "yaya/core";

export const SaleView = () => {
  const { query } = useRouter();

  const saleId = query.id as string;

  const { data } = api.sales.getById.useQuery(
    { id: saleId },
    { enabled: !!saleId }
  );

  return (
    <Card
      className="h-full w-8/12 border-2 bg-slate-200 p-8 pb-10"
      title={"Detalle de venta"}
    >
      {data && <SaleViewForm data={data} />}
    </Card>
  );
};
