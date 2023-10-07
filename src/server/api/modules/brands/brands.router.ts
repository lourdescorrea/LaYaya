import { createTRPCRouter } from "../../configs";
import * as brands from "./brands.handler";

export const brandRouter = createTRPCRouter({
  create: brands.createBrand,
  getAll: brands.getAllBrand,
  archive: brands.archiveBrand,
  edit: brands.editBrand,
  getById: brands.getByIdBrand,
});
