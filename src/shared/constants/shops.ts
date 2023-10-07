import { en } from "../i18n/en";

export const SHOPS = {
  DUARTE: "DUARTE",
  COLON: "COLON",
  DEPOSIT: "DEPOSIT",
};

export const SHOPS_OPTIONS = [
  {
    label: en.constants.shops.duarte,
    value: SHOPS.DUARTE,
  },
  {
    label: en.constants.shops.colon,
    value: SHOPS.COLON,
  },
  {
    label: en.constants.shops.deposit,
    value: SHOPS.DEPOSIT,
  },
];

export type ShopStockKey = "stockDuarte" | "stockColon" | "stockDeposito";

export const SHOPS_STOCK: Record<string, ShopStockKey> = {
  [SHOPS.DUARTE]: "stockDuarte",
  [SHOPS.COLON]: "stockColon",
  [SHOPS.DEPOSIT]: "stockDeposito",
};
