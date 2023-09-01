import { createTRPCRouter } from "../../configs";
import * as sales from "./sales.handler";
export const saleRouter = createTRPCRouter({
  create: sales.createSale,
  getAll: sales.getAllSale,
  delete: sales.deleteSale,
  edit: sales.editSale,
  getById: sales.getByIdSale,
});
