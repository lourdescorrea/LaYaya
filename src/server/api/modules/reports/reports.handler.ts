import { productUpdateSchema } from "yaya/shared";
import { adminProcedure } from "../../configs";

export const getReports = adminProcedure
  .input(productUpdateSchema)
  .query(async ({ ctx, input }) => {
    const { stockDuarte, stockColon, stockDeposito } = input;

    const where = {
      OR: [
        { stockColon: { lte: stockColon } },
        { stockDuarte: { lte: stockDuarte } },
        { stockDeposito: { lte: stockDeposito } },
      ],
    };

    const products = await ctx.prisma.product.findMany({
      where,
      select: {
        name: true,
        stockColon: true,
        stockDuarte: true,
        stockDeposito: true,
      },
    });

    return products.map(
      (product: { stockColon: any; stockDuarte: any; stockDeposito: any }) => ({
        ...product,
        totalStock:
          product.stockColon + product.stockDuarte + product.stockDeposito,
      })
    );
  });
