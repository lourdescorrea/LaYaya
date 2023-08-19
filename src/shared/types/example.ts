import { type helloSchema } from "yaya/shared";
import { type InferType } from "yup";

export type helloInput = InferType<typeof helloSchema>;
