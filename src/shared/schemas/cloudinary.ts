import * as yup from "yup";

export const imageCreateSchema = yup.object().shape({
  name: yup.string().required(),
});
