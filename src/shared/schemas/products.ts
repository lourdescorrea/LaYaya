import * as yup from "yup";

export const productCreateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
<<<<<<< HEAD
  brand: yup.string().required(),
=======
  brandId: yup.string().required(),
>>>>>>> main
  stock: yup.number().required(),
  code: yup.number().required(),
  weight: yup.number().required(),
  image: yup.string().required(),
});

export const productUpdateSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  brandId: yup.string().required(),
  stock: yup.number().required(),
  code: yup.number().required(),
  weight: yup.number().required(),
  id: yup.string().required(),
  image: yup.string().required(),
});
