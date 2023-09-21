export const SHOPS = {
  DUARTE: "DUARTE",
  COLON: "COLON",
  DEPOSIT: "DEPOSIT",
};

export const SHOPS_OPTIONS = [
  {
    label: "DUARTE",
    value: SHOPS.DUARTE,
  },
  {
    label: "COLON",
    value: SHOPS.COLON,
  },
  {
    label: "DEPOSIT",
    value: SHOPS.DEPOSIT,
  },
];

export const SHOPS_STOCK = {
  [SHOPS.DUARTE]: "stockDuarte",
  [SHOPS.COLON]: "stockColon",
  [SHOPS.DEPOSIT]: "stockDeposito",
};

export type ShopStockKey = "stockDuarte" | "stockColon" | "stockDeposito";
