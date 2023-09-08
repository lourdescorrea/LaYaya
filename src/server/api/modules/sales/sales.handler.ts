import { TRPCError } from "@trpc/server";
import { allRolesProcedure } from "../../configs";

import { idSchema, saleCreateSchema, saleUpdateSchema } from "yaya/shared";

//TODO: 1 ctx.prisma.transaction aqui se realizan todas las operaciones
//luego se retornaria la venta fuera de la transaccion

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

export const editSale = allRolesProcedure
  .input(saleUpdateSchema)
  .mutation(async ({ ctx, input }) => {
    const { id } = input;
    try {
      return await ctx.prisma.sale.update({
        where: { id },
        data: input,
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: (error as any).message,
        cause: error,
      });
    }
  });
