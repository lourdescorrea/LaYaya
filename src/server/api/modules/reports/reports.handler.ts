import { adminProcedure } from "../../configs";

export const getReports = adminProcedure.query(async ({ ctx }) => {
  const products = await ctx.prisma.product.findMany({
    where: {
      OR: [
        { stockColon: { lte: 10 } },
        { stockDuarte: { lte: 10 } },
        { stockDeposito: { lte: 10 } },
      ],
    },
    select: {
      name: true,
      stockColon: true,
      stockDuarte: true,
      stockDeposito: true,
    },
  });

  return products.map((product) => ({
    ...product,
    totalStock:
      product.stockColon + product.stockDuarte + product.stockDeposito,
  }));
});

// export const getFilteredReports = adminProcedure
//   .input(reportsSchema)
//   .query(async ({ ctx, input }) => {
//     const products = await ctx.prisma.product.findMany({
//       where: {
//         OR: [
//           { stockColon: { lte: input.min } },
//           { stockDuarte: { lte: input.min } },
//           { stockDeposito: { lte: input.min } },
//         ],
//       },
//       select: {
//         name: true,
//         stockColon: true,
//         stockDuarte: true,
//         stockDeposito: true,
//       },
//     });

//     return products.map((product) => ({
//       ...product,
//       totalStock:
//         product.stockColon + product.stockDuarte + product.stockDeposito,
//     }));
//   });
