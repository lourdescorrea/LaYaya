// import { useRouter } from "next/router";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   Typography,
//   api,
// } from "yaya/core";
// import { en, type Brand } from "yaya/shared";

// interface SalesViewFormProps {
//   open: boolean;
//   data: Brand;
//   onToggle: (v: boolean) => void;
// }

// export const SaleViewPage = ({ open, onToggle }: SalesViewFormProps) => {
//   const { query } = useRouter();
//   const salesId = query.id as string;

//   const { data } = api.sales.getById.useQuery(
//     { id: salesId },
//     { enabled: !!salesId }
//   );

//   return (
//     <Sheet onOpenChange={onToggle} open={open}>
//       <SheetContent>
//         <SheetHeader>
//           <SheetTitle>{en.admin.brand.edit.title}</SheetTitle>
//           <SheetDescription>{en.admin.brand.edit.sub_title}</SheetDescription>
//         </SheetHeader>
//         <div className="flex justify-between">
//           <Typography variant="p">Local: {data?.shop}</Typography>

//           <div className="flex  ">
//             {en.admin.sale.fields.state.title}
//             <Typography
//               variant="p"
//               className={` font-medium ml-2 flex justify-center align-center rounded-full ${
//                 data?.state === "ACTIVE" ? "text-green-800" : "text-red-800"
//               }`}
//             >
//               {data?.state}
//             </Typography>
//           </div>
//         </div>
//         <Typography variant="p">
//           {en.admin.sale.fields.methods.title}
//           {data?.paymentMethod}
//         </Typography>

//         <Typography variant="p">
//           {en.admin.sale.fields.products.title}
//         </Typography>

//         {data?.productsOnSale &&
//           data.productsOnSale.map((product) => (
//             <div key={product.id} className="flex justify-between">
//               <Typography variant="p" className="mt-6">
//                 {product.name}
//               </Typography>

//               <Typography variant="p">${product.price}</Typography>

//               <Typography variant="p">
//                 {en.admin.sale.fields.quantity.title} {product.quantity}
//               </Typography>

//               <img className="w-10 h-10 mt-4" src={product.image} />
//             </div>
//           ))}

//         <Typography variant="p" className="text-end">
//           {en.admin.sale.fields.totals.title}
//           {data?.amount}
//         </Typography>
//         <SheetFooter></SheetFooter>
//       </SheetContent>
//     </Sheet>
//   );
// };
