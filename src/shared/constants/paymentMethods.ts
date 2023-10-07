import { en } from "../i18n/en";

export const PAYMENT_METHODS = {
  CREDIT: "CREDIT",
  DEBIT: "DEBIT",
  CASH: "CASH",
  TRANSFER: "TRANSFER",
};

export const PAYMENT_OPTIONS = [
  {
    label: en.constants.payment_method.credit,
    value: PAYMENT_METHODS.CREDIT,
  },
  {
    label: en.constants.payment_method.cash,
    value: PAYMENT_METHODS.CASH,
  },
  {
    label: en.constants.payment_method.transfer,
    value: PAYMENT_METHODS.TRANSFER,
  },
  {
    label: en.constants.payment_method.credit,
    value: PAYMENT_METHODS.DEBIT,
  },
];
