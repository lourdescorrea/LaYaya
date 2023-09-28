import { createTRPCRouter } from "../../configs";
import * as brands from "./brands.handler";

export const brandRouter = createTRPCRouter({
  create: brands.createBrand,
  getAll: brands.getAllBrand,
  delete: brands.cancelBrand,
  edit: brands.editBrand,
  getById: brands.getByIdBrand,
});
