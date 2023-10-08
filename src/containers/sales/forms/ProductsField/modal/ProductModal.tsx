/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useProductModal } from "./useProductModal";
import type {
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import { IoAddCircleOutline } from "react-icons/io5";
import {
  Button,
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  SimpleTable,
  formatCurrency,
  useBoolean,
} from "yaya/core";
import { Checkbox } from "yaya/core/components/form/components/fields/Checkbox";

interface Props {
  append: UseFieldArrayAppend<FieldValues, "productsOnSale">;
  fields: any;
  remove: UseFieldArrayRemove;
  isView?: boolean;
}

export const ProductModal = (props: Props) => {
  const { data, isLoading, onChange } = useProductModal(props);
  const { value, setValue, onFalse } = useBoolean();

  return (
    <Dialog open={value} onOpenChange={setValue}>
      <DialogTrigger>
        <IoAddCircleOutline className="h-6 w-6 text-red-600" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Seleccione lo que desea agregar</DialogTitle>
        </DialogHeader>
        <SimpleTable.Table>
          <SimpleTable.TableHeader>
            <SimpleTable.TableRow>
              <SimpleTable.TableHead className="w-[100px]">
                Nombre
              </SimpleTable.TableHead>
              <SimpleTable.TableHead>Marca</SimpleTable.TableHead>
              <SimpleTable.TableHead className="text-right">
                Stock
              </SimpleTable.TableHead>
              <SimpleTable.TableHead className="text-right">
                Precio
              </SimpleTable.TableHead>
              <SimpleTable.TableHead className="text-right">
                Agregar?
              </SimpleTable.TableHead>
            </SimpleTable.TableRow>
          </SimpleTable.TableHeader>
          <SimpleTable.TableBody>
            {isLoading ? (
              <SimpleTable.TableRow>
                <SimpleTable.TableCell colSpan={4}>
                  Cargando...
                </SimpleTable.TableCell>
              </SimpleTable.TableRow>
            ) : (
              data?.map((p) => (
                <SimpleTable.TableRow key={p.id}>
                  <SimpleTable.TableCell className="font-medium">
                    {p.name}
                  </SimpleTable.TableCell>
                  <SimpleTable.TableCell>{p.brand?.name}</SimpleTable.TableCell>
                  <SimpleTable.TableCell className="text-right">
                    {p.stockColon}
                  </SimpleTable.TableCell>
                  <SimpleTable.TableCell className="text-right">
                    {formatCurrency(p.price)}
                  </SimpleTable.TableCell>
                  <SimpleTable.TableCell>
                    <div className="flex justify-center">
                      <Checkbox
                        checked={props.fields.some(
                          (d: any) => d.productId === p.id
                        )}
                        onCheckedChange={(isAdd) => onChange(isAdd, p)}
                      />
                    </div>
                  </SimpleTable.TableCell>
                </SimpleTable.TableRow>
              ))
            )}
          </SimpleTable.TableBody>
        </SimpleTable.Table>
        <DialogFooter>
          <Button type="button" variant="outline" onClick={onFalse}>
            Cerrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
