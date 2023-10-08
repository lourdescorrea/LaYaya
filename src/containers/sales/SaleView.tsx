import { SaleViewForm } from "./forms";
import { type Sale } from "@prisma/client";
import { useRouter } from "next/router";
import { Card, api } from "yaya/core";

interface SalesViewFormProps {
  open: boolean;
  data: Sale;
  onToggle: (v: boolean) => void;
}

export const SaleView = ({ data: { id } }: SalesViewFormProps) => {
  const { query } = useRouter();

  const { data } = api.sales.getById.useQuery({ id: id }, { enabled: !!id });

  return (
    <Card className="border-2 bg-slate-200 ">
      {data && <SaleViewForm data={data} />}
    </Card>
  );
};
