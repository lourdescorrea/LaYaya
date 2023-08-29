import type { Product } from "@prisma/client";
import type { productCreateSchema, productUpdateSchema } from "yaya/shared";
import type { InferType } from "yup";

export type ProductCreate = InferType<typeof productCreateSchema>;
export type ProductEdit = InferType<typeof productUpdateSchema>;
export type { Product };
