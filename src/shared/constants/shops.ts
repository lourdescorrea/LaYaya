export const SHOPS = {
  DUARTE: "DUARTE",
  COLON: "COLON",
  DEPOSIT: "DEPOSIT",
};

export const SHOPS_OPTIONS = [
  {
    label: "Local Duarte",
    value: SHOPS.DUARTE,
  },
  {
    label: "Local Colon",
    value: SHOPS.COLON,
  },
  {
    label: "Deposito",
    value: SHOPS.DEPOSIT,
  },
];

export const SHOPS_STOCK = {
  [SHOPS.DUARTE]: "stockDuarte",
  [SHOPS.COLON]: "stockColon",
  [SHOPS.DEPOSIT]: "stockDeposito",
};

export type ShopStockKey = "stockDuarte" | "stockColon" | "stockDeposito";
