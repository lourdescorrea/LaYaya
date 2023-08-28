import { createTRPCRouter } from "../../configs";
import * as products from "./products.handler";

export const productRouter = createTRPCRouter({
  create: products.createProduct,
  getAll: products.getAllProduct,
  delete: products.deleteProduct,
  edit: products.editProduct,
  getById: products.getByIdProduct,
});
