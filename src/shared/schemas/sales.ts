import * as yup from "yup";

export const saleCreateSchema = yup.object().shape({
  paymentMethod: yup.string().required(),
  userId: yup.string().required(),
  shopId: yup.string().required(),
  state: yup.string().required(),
  productonSaleId: yup.string().required(),
});

export const saleUpdateSchema = yup.object().shape({
  paymentMethod: yup.string().required(),
  userId: yup.string().required(),
  shopId: yup.string().required(),
  state: yup.string().required(),
  id: yup.string().required(),
  productonSaleId: yup.string().required(),
});
