import type { Brand } from "@prisma/client";
import type { brandCreateSchema, brandUpdateSchema } from "yaya/shared";
import type { InferType } from "yup";

export type BrandCreate = InferType<typeof brandCreateSchema>;
export type BrandEdit = InferType<typeof brandUpdateSchema>;
export type { Brand };
