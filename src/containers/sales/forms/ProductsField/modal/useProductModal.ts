import type {
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from "react-hook-form";
import { api, useScanDetection } from "yaya/core";
import { type RouterOutputs } from "yaya/shared";

type Products = RouterOutputs["products"]["getAll"];
type Product = Products[0];

interface Props {
  append: UseFieldArrayAppend<FieldValues, "productsOnSale">;
  fields: any[];
  remove: UseFieldArrayRemove;
  isView?: boolean;
}

export const useProductModal = (a: Props) => {
  const { data, isLoading } = api.products.getAll.useQuery(undefined, {
    initialData: [],
  });

  const onChange = (isAdd: string | boolean, product: Product) => {
    const idx = a.fields.findIndex((f) => f.productId === product.id);

    if (isAdd && idx < 0) {
      a.append({
        ...product,
        quantity: 1,
        productId: product.id,
      });
    }

    if (!isAdd && idx > -1) {
      a.remove(idx);
    }
  };

  const onScann = (codebar: string) => {
    if (a.isView) return;

    const product = data.find((p) => p.codeBar === codebar);

    if (product) {
      onChange(true, product);
    }
  };

  useScanDetection({ onComplete: onScann });

  return {
    onChange,
    data,
    isLoading,
  };
};
