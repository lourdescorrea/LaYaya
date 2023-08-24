import { useState } from "react";

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
  // TODO Define type
  const [data, setData] = useState<any>(null);

  // TODO Define type
  const open = (d: any) => {
    setData(d);
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
