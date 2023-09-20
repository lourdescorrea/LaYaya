import { saleCreateSchema } from "../schemas/sales";
import { Sale } from "@prisma/client";
import type { InferType } from "yup";

export type SaleCreate = InferType<typeof saleCreateSchema>;
// export type SaleEdit = InferType<typeof saleUpdateSchema>;
export type { Sale };
