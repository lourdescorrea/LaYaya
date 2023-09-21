import { idSchema } from "yaya/shared";
import { allRolesProcedure } from "../../configs";

export const getReports = allRolesProcedure
  .input(idSchema)
  .query(async ({ ctx, input }) => {
    const { id } = input;

    const product = await ctx.prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!product) {
      return null;
    }

    const stock = {
      stockDuarte: product.stockDuarte,
      stockColon: product.stockColon,
      stockDeposito: product.stockDeposito,
    };

    return {
      product,
      stock,
    };
  });
