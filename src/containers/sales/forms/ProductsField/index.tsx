import type { UseFieldArrayRemove } from "react-hook-form";
import { BiTrash } from "react-icons/bi";
import { Button, RHFTextField, SimpleTable, formatCurrency } from "yaya/core";
import { SHOPS_STOCK } from "yaya/shared";

interface Props {
  fields: Record<"id", string>[];
  remove: UseFieldArrayRemove;
  selectedShop: any;
  isView?: boolean;
}

export const ProductsField = ({
  fields,
  remove,
  selectedShop,
  isView,
}: Props) => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <SimpleTable.Table>
        <TableHeader isView={isView} />
        <SimpleTable.TableBody>
          {fields.map((field: any, idx) => {
            const stock = field[SHOPS_STOCK[selectedShop] as string];
            return (
              <SimpleTable.TableRow key={field.id}>
                <SimpleTable.TableCell className="font-medium">
                  {field.name}
                </SimpleTable.TableCell>
                <SimpleTable.TableCell>
                  {isView ? field.product?.brand?.name : field.brand?.name}
                </SimpleTable.TableCell>

                {!isView && (
                  <SimpleTable.TableCell>{stock}</SimpleTable.TableCell>
                )}

                <SimpleTable.TableCell>
                  {formatCurrency((field.price as number) ?? 0)}
                </SimpleTable.TableCell>
                <SimpleTable.TableCell className="max-w-[100px]">
                  {isView ? (
                    field.quantity
                  ) : (
                    <RHFTextField
                      name={`productsOnSale[${idx}].quantity`}
                      placeholder="Cantidad"
                      type="number"
                      min="1"
                      disabled={isView}
                      max={`${stock ?? 0}`}
                    />
                  )}
                </SimpleTable.TableCell>
                {!isView && (
                  <SimpleTable.TableCell>
                    <Button variant="ghost" onClick={() => remove(idx)}>
                      <BiTrash className="h-4 w-4 text-red-500" />
                    </Button>
                  </SimpleTable.TableCell>
                )}
              </SimpleTable.TableRow>
            );
          })}
        </SimpleTable.TableBody>
      </SimpleTable.Table>
    </div>
  );
};

const TableHeader = ({ isView }: { isView?: boolean }) => {
  return (
    <SimpleTable.TableHeader>
      <SimpleTable.TableRow>
        <SimpleTable.TableHead>Nombre</SimpleTable.TableHead>
        <SimpleTable.TableHead>Marca</SimpleTable.TableHead>
        {!isView && <SimpleTable.TableHead>Stock</SimpleTable.TableHead>}
        <SimpleTable.TableHead>Precio</SimpleTable.TableHead>
        <SimpleTable.TableHead className="max-w-[100px]">
          Cantidad
        </SimpleTable.TableHead>
      </SimpleTable.TableRow>
    </SimpleTable.TableHeader>
  );
};
