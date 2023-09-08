// import { useRouter } from "next/router";
// import { api, paths, useActionToast } from "yaya/core";
// import { en } from "yaya/shared";

// export const useSaleTable = () => {
//   const { push } = useRouter();
//   const { isLoading, data } = api.sales.getAll.useQuery(undefined, {
//     initialData: [],
//   });

//   const columns = [{ accessorKey: "name" }];

//   const onDelete = useActionToast({
//     trpc: api.products.delete,
//     errorMsg: `${en.admin.product.delete.messages.error}`,
//     successMsg: `${en.admin.product.delete.messages.success}`,
//     alertMsg: `${en.admin.product.delete.title}`,
//   });

//   //   const deleteFn = (data: Sales) => onDelete({ id: data.id });
//   //   const viewFn = (data: Sale) => push(paths.sales.view(data.id));
//   const createFn = () => push(paths.sales.create);

//   return {
//     columns,
//     data,
//     deleteFn,
//     createFn,
//     isLoading,
//   };
// };
