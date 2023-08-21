import * as yup from "yup";

export const brandSchema = yup.object({ text: yup.string().required() });
