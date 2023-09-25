import { allRolesProcedure } from "../../configs";

export const getReports = allRolesProcedure.query(async ({ ctx }) => {
  const products = await ctx.prisma.product.findMany();

  // Crear un objeto para almacenar los resultados por local
  const results = products.map((product) => {
    return {
      producto: product,
      local: {
        Duarte: product.stockDuarte < 10 ? product.stockDuarte : "-",
        Colon: product.stockColon < 10 ? product.stockColon : "-",
        Deposito: product.stockDeposito < 10 ? product.stockDeposito : "-",
      },
    };
  });

  return results;
});
