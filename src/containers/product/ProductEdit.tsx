import { useRouter } from "next/router";
import { Card, api } from "yaya/core";
import { ProductForm } from "./ProductForm";

export const ProductEditPage = () => {
  const { query } = useRouter();

  const productId = query.id as string;

  const { data } = api.products.getById.useQuery(
    { id: productId },
    { enabled: !!productId }
  );

  return (
    <Card
      className="h-full w-8/12 border-2 border-card bg-white p-8 pb-10"
      title="Edición de productos"
    >
      {data && <ProductForm data={data} />}
    </Card>
  );
};

// const Example = (props: any) => {
//   const { push } = useRouter();

//   const methods = useForm<ProductEdit>({
//     defaultValues: {
//       ...props.data,
//     },
//     resolver: yupResolver(productUpdateSchema),
//   });

//   const { onSubmit, isLoading } = useSubmitTrpc({
//     trpc: api.products.edit,
//     errorMsg: `${en.admin.product.edit.messages.error}`,
//     successMsg: `${en.admin.product.edit.messages.success}`,
//     onSuccess: () => push(paths.product.root),
//   });

//   return (
//     <RhfForm methods={methods} onSubmit={onSubmit}>
//       <div className="flex flex-col">
//         <ProductFields />
//         <LoadingButton
//           className="ml-[750px] mt-8 w-32"
//           loading={isLoading}
//           type="submit"
//         >
//           {en.common.save}
//         </LoadingButton>
//       </div>
//     </RhfForm>
//   );
// };
