import * as yup from "yup";

export const idSchema = yup.object({ id: yup.string().required() });
