import { type Sale } from "@prisma/client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  Typography,
  api,
} from "yaya/core";
import { SALE_STATE, en } from "yaya/shared";

interface SalesViewFormProps {
  open: boolean;
  data: Sale;
  onToggle: (v: boolean) => void;
}

export const SaleViewSheet = ({
  open,
  onToggle,
  data: { id },
}: SalesViewFormProps) => {
  const { data } = api.sales.getById.useQuery({ id: id }, { enabled: !!id });

  return (
    <Sheet onOpenChange={onToggle} open={open}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{en.admin.sale.view.title}</SheetTitle>
        </SheetHeader>

        <div className="flex space-x-2">
          <Typography variant="large" className="mt-6">
            {en.admin.sale.fields.state.title}
          </Typography>

          <Typography
            variant="p"
            className={`font-medium ml-2 ${
              data?.state === SALE_STATE.ACTIVE
                ? "text-green-800"
                : "text-red-800"
            }`}
          >
            {/* TODO: Translate  */}
            {data?.state}
          </Typography>
        </div>
        <div className="flex space-x-2">
          <Typography variant="large" className="mt-6">
            {en.admin.sale.fields.shop.title}
          </Typography>
          {/* TODO: Translate  */}
          <Typography variant="p">{data?.shop}</Typography>
        </div>
        <div className="flex space-x-2">
          <Typography variant="large" className="mt-6">
            {en.admin.sale.fields.methods.title}
          </Typography>
          {/* TODO: Translate  */}
          <Typography variant="p">{data?.paymentMethod}</Typography>
        </div>
        <Typography className="mt-6" variant="large">
          {en.admin.sale.fields.products.title}
        </Typography>

        {/* TODO: Table?  */}
        {data?.productsOnSale?.map((product) => (
          <div key={product.id} className="flex justify-between">
            <Typography variant="p" className="mt-6">
              {product.name}
            </Typography>

            <Typography variant="p">${product.price}</Typography>

            <Typography variant="p">
              {en.admin.sale.fields.quantity.title} {product.quantity}
            </Typography>
            {/* TODO: Next Image  */}
            <img className="w-10 h-10 mt-4" src={product.image} />
          </div>
        ))}

        <Typography variant="large" className="text-end mt-12">
          {en.admin.sale.fields.totals.title}
          {data?.amount}
        </Typography>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
