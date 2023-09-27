import { TRPCError } from "@trpc/server";
import {
  idSchema,
  productCreateSchema,
  productUpdateSchema,
} from "yaya/shared";
import { adminProcedure, allRolesProcedure } from "../../configs";

export const getAllProduct = allRolesProcedure.query(({ ctx }) => {
  return ctx.prisma.product.findMany();
});

export const getByIdProduct = adminProcedure
  .input(idSchema)
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.product.findUnique({
      where: { id },
    });
  });

export const createProduct = adminProcedure
  .input(productCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      return await ctx.prisma.product.create({
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

export const deleteProduct = adminProcedure
  .input(idSchema)
  .mutation(async ({ input, ctx }) => {
    const { id } = input;
    try {
      return await ctx.prisma.product.delete({
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

export const editProduct = adminProcedure
  .input(productUpdateSchema)
  .mutation(async ({ ctx, input }) => {
    const { id, name } = input;
    try {
      return await ctx.prisma.product.update({
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
