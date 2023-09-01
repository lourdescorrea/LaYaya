import * as yup from "yup";

export const productCreateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  brandId: yup.string().required(),
  stock: yup.number().required(),
  code: yup.number().required(),
  weight: yup.number().required(),
});

export const productUpdateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  brandId: yup.string().required(),
  stock: yup.number().required(),
  code: yup.number().required(),
  weight: yup.number().required(),
  id: yup.string().required(),
});
