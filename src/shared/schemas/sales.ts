import * as yup from "yup";

export const saleCreateSchema = yup.object().shape({
  name: yup.string().required(),
  stock: yup.number().required(),
  date: yup.date().required(),
  amount: yup.number().required(),
  payment: yup.string().required(),
  product: yup.string().required(),
});

export const saleUpdateSchema = yup.object().shape({
  name: yup.string().required(),
  stock: yup.number().required(),
  date: yup.date().required(),
  amount: yup.number().required(),
  payment: yup.string().required(),
  product: yup.string().required(),
  id: yup.string().required(),
});
