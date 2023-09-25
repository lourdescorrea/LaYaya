import { allRolesProcedure } from "../../configs";

export const getReports = allRolesProcedure.query(async ({ ctx }) => {
  const products = await ctx.prisma.product.findMany();

  const filteredProducts = products.filter((product) => {
    return (
      product.stockDuarte < 10 &&
      product.stockColon < 10 &&
      product.stockDeposito < 10
    );
  });

  return filteredProducts;
});
