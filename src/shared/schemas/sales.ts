import * as yup from "yup";

export const saleCreateSchema = yup.object().shape({
  paymentMethod: yup.string().required(),
  shop: yup.string().required(),
  productsOnSale: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      quantity: yup.number().required(),
    })
  ),
});

//crear en constantes los shops y los metodos de pago y pasarlos aca
