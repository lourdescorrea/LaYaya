import { TRPCError } from "@trpc/server";
import { allRolesProcedure } from "../../configs";

import { idSchema } from "yaya/shared";
import { saleCreateSchema, saleUpdateSchema } from "yaya/shared/schemas/sales";

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
      return await ctx.prisma.sale.create({
        data: {
          name: input.name,
          stock: input.stock,
          date: input.date,
          amount: input.amount,
          payment: input.payment,
        },
      });
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
    const { id, name } = input;
    try {
      return await ctx.prisma.sale.update({
        where: { id },
        data: {
          name: name,
          stock: input.stock,
          date: input.date,
          amount: input.amount,
          payment: input.payment,
        },
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: (error as any).message,
        cause: error,
      });
    }
  });
