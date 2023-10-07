import { shopSchema } from "./commons";
import * as yup from "yup";

export const reportsSchema = yup.object().shape({
  min: yup.number().required(),
  max: yup.number().required(),
  shop: shopSchema,
});
