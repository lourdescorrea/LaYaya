import { createTRPCRouter } from "../../configs";
import * as products from "./products.handler";

export const productRouter = createTRPCRouter({
  create: products.createProduct,
});
