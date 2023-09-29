import { adminProcedure } from "../../configs";
import { reportsSchema } from "yaya/shared";

export const getReports = adminProcedure
  .input(reportsSchema)
  .query(async ({ ctx, input }) => {
    // TODO: SEGUN EL SHOP ES EL STOCK QUE TIENEN QUE FILTRAR
    const { max, min, shop } = input;

    const products = await ctx.prisma.product.findMany({
      where: {
        OR: [{ stockColon: { lte: max } }, { stockColon: { gte: min } }],
      },
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

// se deberia realizar una query para devolver todos los productos y completar
//la tabla primeramente

//una segunda query que devuelva filtrados, los stock por local y por minimo que
//el usuario ingrese
