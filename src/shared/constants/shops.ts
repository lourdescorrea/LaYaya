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

export const SHOPS_STOCK = [
  {
    label: "stockDuarte",
    value: SHOPS.DUARTE,
  },
  {
    label: "stockColon",
    value: SHOPS.COLON,
  },
  {
    label: "stockDeposito",
    value: SHOPS.DEPOSIT,
  },
];
export type ShopStockKey = "stockDuarte" | "stockColon" | "stockDeposito";
