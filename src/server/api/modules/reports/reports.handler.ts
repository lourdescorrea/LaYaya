import { SHOPS_STOCK } from "../../../../shared/constants/shops";
import { adminProcedure } from "../../configs";
import { reportsSchema } from "yaya/shared";

export const getReports = adminProcedure
  .input(reportsSchema)
  .query(async ({ ctx, input }) => {
    const { max, min, shop } = input;

    const shopKey = SHOPS_STOCK[shop];

    const products = await ctx.prisma.product.findMany({
      where: {
        ...(shopKey && { [shopKey]: { gte: min, lte: max } }),
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
