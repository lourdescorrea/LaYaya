import { type brandSchema } from "yaya/shared";
import { type InferType } from "yup";

export type brandSchema = InferType<typeof brandSchema>;
