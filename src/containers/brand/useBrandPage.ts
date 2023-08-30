import { useState } from "react";
import type { Brand } from "yaya/shared";

export const useCreateSheet = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    onToggle: (value: boolean) => setIsOpen(value),
    onOpen: () => setIsOpen(true),
  };
};

export const useEditSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Brand | null>(null);

  const open = (brand: Brand) => {
    setData(brand);
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
