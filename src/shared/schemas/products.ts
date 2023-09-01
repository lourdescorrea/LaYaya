import * as yup from "yup";

export const productCreateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  brand: yup.number().required(), //TODO: cambiar al tipo string y renombrar como brandId
  stock: yup.number().required(),
  code: yup.number().required(),
  weight: yup.number().required(),
});

export const productUpdateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  brand: yup.number().required(),
  stock: yup.number().required(),
  code: yup.number().required(),
  weight: yup.number().required(),
  id: yup.string().required(),
});
