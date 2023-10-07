import { paymentMethodSchema, shopSchema } from "./commons";
import * as yup from "yup";

export const saleCreateSchema = yup.object().shape({
  paymentMethod: paymentMethodSchema,
  shop: shopSchema,
  productsOnSale: yup
    .array()
    .of(
      yup.object().shape({
        productId: yup.string().required(),
        quantity: yup.number().required(),
      })
    )
    .min(1)
    .required(),
});
