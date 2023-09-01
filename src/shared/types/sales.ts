import { Sale } from "@prisma/client";
import type { InferType } from "yup";
import { saleCreateSchema, saleUpdateSchema } from "../schemas/sales";

export type SaleCreate = InferType<typeof saleCreateSchema>;
export type SaleEdit = InferType<typeof saleUpdateSchema>;
export type { Sale };
