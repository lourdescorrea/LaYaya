import { createTRPCRouter } from "../../configs";
import * as brands from "./brands.handler";

export const brandRouter = createTRPCRouter({
  addBrand: brands.createBrand,
});
