import * as yup from "yup";

export const productCreateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  stockDuarte: yup.number().required(),
  stockColon: yup.number().required(),
  stockDeposito: yup.number().required(),
  codeBar: yup.string().required(),
  weight: yup.number().required(),
  image: yup.string().required(),
  brandId: yup.string().required(),
});

export const productUpdateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  stockDuarte: yup.number().required(),
  stockColon: yup.number().required(),
  stockDeposito: yup.number().required(),
  codeBar: yup.string().required(),
  weight: yup.number().required(),
  image: yup.string().required(),
  brandId: yup.string().required(),
  id: yup.string().required(),
});
