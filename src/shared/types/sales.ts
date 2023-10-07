import { type saleCreateSchema } from "../schemas/sales";
import { type Sale } from "@prisma/client";
import type { InferType } from "yup";

export type SaleCreate = InferType<typeof saleCreateSchema>;
export type { Sale };
