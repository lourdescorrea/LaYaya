import * as yup from "yup";
import { METHODS, SHOPS } from "../constants";

export const saleCreateSchema = yup.object().shape({
  paymentMethod: yup
    .string()
    .required()
    .oneOf([
      METHODS.CREDITO,
      METHODS.DEBITO,
      METHODS.EFECTIVO,
      METHODS.TRANSFERENCIA,
    ]),
  shop: yup
    .string()
    .required()
    .oneOf([SHOPS.COLON, SHOPS.DEPOSIT, SHOPS.DUARTE]),
  productsOnSale: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.string().required(),
        quantity: yup.number().required(),
      })
    )
    .min(1)
    .required(),
  amount: yup.number().notRequired(),
});
