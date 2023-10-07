import { type Sale } from "@prisma/client";
import { useState } from "react";

export const useViewSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Sale | null>(null);

  const open = (sale: Sale) => {
    setData(sale);
    setIsOpen(true);
  };

  const onToggle = (value: boolean) => {
    if (!value) {
      setData(null);
    }
    setIsOpen(value);
  };

  return {
    isOpen,
    onToggle: onToggle,
    onOpen: open,
    data,
  };
};
