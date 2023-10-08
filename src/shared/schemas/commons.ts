import { PAYMENT_METHODS, SHOPS } from "../constants";
import * as yup from "yup";

export const idSchema = yup.object({ id: yup.string().required() });

export const paymentMethodSchema = yup
  .string()
  .required()
  .oneOf([
    PAYMENT_METHODS.CREDIT,
    PAYMENT_METHODS.DEBIT,
    PAYMENT_METHODS.CASH,
    PAYMENT_METHODS.TRANSFER,
  ]);

export const shopSchema = yup
  .string()
  .required()
  .oneOf([SHOPS.COLON, SHOPS.DEPOSIT, SHOPS.DUARTE]);

export const currencySchema = yup
  .number()
  .transform((_value, originalValue: string) => {
    return Number(`${originalValue}`.replace(/,/, "."));
  })
  .required();
