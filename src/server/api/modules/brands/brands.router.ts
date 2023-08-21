import { createTRPCRouter } from "../../configs";
import * as brands from "./brands.handler";

export const exampleRouter = createTRPCRouter({
  createBrand: brands.createBrand,
});
