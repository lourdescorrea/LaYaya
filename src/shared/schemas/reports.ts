import { SHOPS } from "../constants";
import * as yup from "yup";

export const reportsSchema = yup.object().shape({
  min: yup.number().required(),
  max: yup.number().required(),
  shop: yup
    .string()
    .required()
    .oneOf([SHOPS.COLON, SHOPS.DEPOSIT, SHOPS.DUARTE]),
});
