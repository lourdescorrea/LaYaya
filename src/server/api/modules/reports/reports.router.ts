import { createTRPCRouter } from "../../configs";
import * as reports from "./reports.handler";

export const reportsRouter = createTRPCRouter({
  getAll: reports.getReports,
});
