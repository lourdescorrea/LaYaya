import type { UseFieldArrayRemove } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { Button, RHFTextField, SimpleTable, formatCurrency } from "yaya/core";
import { SHOPS_STOCK } from "yaya/shared";

interface Props {
  fields: Record<"id", string>[];
  remove: UseFieldArrayRemove;
  selectedShop: any;
}

export const ProductsField = ({ fields, remove, selectedShop }: Props) => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <SimpleTable.Table>
        <TableHeader />
        <SimpleTable.TableBody>
          {fields.map((field: any, idx) => {
            const stock = field[SHOPS_STOCK[selectedShop] as string];
            return (
              <SimpleTable.TableRow key={field.id}>
                <SimpleTable.TableCell className="font-medium">
                  {field.name}
                </SimpleTable.TableCell>
                <SimpleTable.TableCell>
                  {field.brand?.name}
                </SimpleTable.TableCell>
                <SimpleTable.TableCell>{stock}</SimpleTable.TableCell>
                <SimpleTable.TableCell>
                  {formatCurrency((field.price as number) ?? 0)}
                </SimpleTable.TableCell>
                <SimpleTable.TableCell className="max-w-[100px]">
                  <RHFTextField
                    name={`productsOnSale[${idx}].quantity`}
                    placeholder="Cantidad"
                    type="number"
                    min="1"
                    max={`${stock ?? 0}`}
                  />
                </SimpleTable.TableCell>
                <SimpleTable.TableCell>
                  <Button variant="ghost" onClick={() => remove(idx)}>
                    <BiTrash className="h-4 w-4 text-red-500" />
                  </Button>
                </SimpleTable.TableCell>
              </SimpleTable.TableRow>
            );
          })}
        </SimpleTable.TableBody>
      </SimpleTable.Table>
    </div>
  );
};

const TableHeader = () => {
  return (
    <SimpleTable.TableHeader>
      <SimpleTable.TableRow>
        <SimpleTable.TableHead>Nombre</SimpleTable.TableHead>
        <SimpleTable.TableHead>Marca</SimpleTable.TableHead>
        <SimpleTable.TableHead>Stock</SimpleTable.TableHead>
        <SimpleTable.TableHead>Precio</SimpleTable.TableHead>
        <SimpleTable.TableHead className="max-w-[100px]">
          Cantidad
        </SimpleTable.TableHead>
      </SimpleTable.TableRow>
    </SimpleTable.TableHeader>
  );
};
