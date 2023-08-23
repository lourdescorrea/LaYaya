import { useState } from "react";

export const useBrandPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    onToggle: (value: boolean) => setIsOpen(value),
    onOpen: () => setIsOpen(true),
  };
};
