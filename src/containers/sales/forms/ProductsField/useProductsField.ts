import { useEffect, useState } from "react";
import { useFieldArray, useWatch } from "react-hook-form";

export const useProductsField = () => {
  const [total, setTotal] = useState(0);
  const { fields, append, remove } = useFieldArray({
    name: "productsOnSale",
  });

  const selectedShop = useWatch({ name: "shop" });
  const productsOnSale: any[] = useWatch({ name: "productsOnSale" });

  useEffect(() => {
    let total = 0;

    (productsOnSale || []).forEach((field: any) => {
      total += field.price * field.quantity;
    });

    setTotal(total);
  }, [productsOnSale]);

  return {
    total,
    fields,
    append,
    remove,
    selectedShop,
  };
};
