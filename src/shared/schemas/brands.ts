import * as yup from "yup";

export const brandCreateSchema = yup.object().shape({
  name: yup.string().required(),
});

export const brandUpdateSchema = yup.object().shape({
  name: yup.string().required(),
  id: yup.string().required(),
});
