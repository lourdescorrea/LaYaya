import * as yup from "yup";

export const helloSchema = yup.object({ text: yup.string().required() });
// TODO: REMOVE EXAMPLE
