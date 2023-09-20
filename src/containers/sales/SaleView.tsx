import { Typography } from "../../core/components/typography/index";
import { useRouter } from "next/router";
import { Card, api } from "yaya/core";
import { en } from "yaya/shared";

export const SaleViewPage = () => {
  const { query } = useRouter();
  const salesId = query.id as string;

  const { data } = api.sales.getById.useQuery(
    { id: salesId },
    { enabled: !!salesId }
  );

  return (
    <Card
      className="h-full w-5/12 border-2 border-card bg-white p-8 pb-10"
      title={en.admin.sale.view.title}
    >
      <div className="flex justify-between">
        <Typography variant="p">Local: {data?.shop}</Typography>

        <div className="flex  ">
          Estado de la venta:
          <Typography
            variant="p"
            className="ml-2 flex justify-center align-center rounded-full text-green-800 "
          >
            {data?.state}
          </Typography>
        </div>
      </div>
      <Typography variant="p">
        {" "}
        {en.admin.sale.fields.methods.title}
        {data?.paymentMethod}
      </Typography>
      <Typography variant="p">{en.admin.sale.fields.products.title}</Typography>
      {data?.productsOnSale &&
        data.productsOnSale.map((product) => (
          <div key={product.id} className="flex justify-between">
            <Typography variant="p" className="mt-6">
              {product.name}
            </Typography>
            <Typography variant="p">${product.price}</Typography>
            <Typography variant="p">
              {en.admin.sale.fields.quantity.title} {product.quantity}
            </Typography>
            <img className="w-10 h-10 mt-4" src={product.image} />
          </div>
        ))}

      <Typography variant="p" className="text-end">
        {en.admin.sale.fields.totals.title}
        {data?.amount}
      </Typography>
    </Card>
  );
};
