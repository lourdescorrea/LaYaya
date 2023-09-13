import { TRPCError } from "@trpc/server";
import { allRolesProcedure } from "../../configs";

import { idSchema, saleCreateSchema } from "yaya/shared";

//TODO: 1 ctx.prisma.transaction aqui se realizan todas las operaciones
//luego se retornaria la venta fuera de la transaccion

//TODO: 1 crear venta:
// 1.1 validar  que el usuario tenga el mismo local que el asignado, lo saco
// 1 calcular importe de la venta (obtener productos que pertenecen a esa venta, los recorro, segun su id y obtengo la cantidad y lo multiplico por el monto, luego sumo el total)
// 2 crear los productonsale se le pasa la data con lo que necesito
// 3 restar el stock// validar que la cantidad vendida de un producto no sea mayor al stock que hay en ese local
// 4 cuando creas la venta pasarle a el productonsale (createmany)
// 5 pasarle el estado, local, usuario, etc.

//TODO: Cancelar venta
// 1 llamo al productonsale, para cada productonsale le hago una suma del producto que se habia vendido

export const getAllSale = allRolesProcedure.query(({ ctx }) => {
  return ctx.prisma.sale.findMany();
});

export const getByIdSale = allRolesProcedure
  .input(idSchema)
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.sale.findUnique({
      where: { id },
    });
  });

export const createSale = allRolesProcedure
  .input(saleCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const result = await ctx.prisma.$transaction([
        ctx.prisma.sale.create({
          data: input,
        }),
      ]);
      return result[0];
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: (error as any).message,
        cause: error,
      });
    }
  });

export const deleteSale = allRolesProcedure
  .input(idSchema)
  .mutation(async ({ input, ctx }) => {
    const { id } = input;
    try {
      return await ctx.prisma.sale.delete({
        where: { id },
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: (error as any).message,
        cause: error,
      });
    }
  });
