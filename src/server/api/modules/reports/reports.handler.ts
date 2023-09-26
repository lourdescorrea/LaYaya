import { allRolesProcedure } from "../../configs";

export const getReports = allRolesProcedure.query(async ({ ctx }) => {
  return await ctx.prisma.product.findMany({
    where: {
      OR: [
        { stockColon: { lte: 10 } },
        { stockDuarte: { lte: 10 } },
        { stockDeposito: { lte: 10 } },
      ],
    },
  });
});
