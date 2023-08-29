import { TRPCError } from "@trpc/server";
import { superAdminProcedure } from "../../configs";

import { idSchema } from "yaya/shared";
import {
  productCreateSchema,
  productUpdateSchema,
} from "yaya/shared/schemas/products";

export const createProduct = superAdminProcedure
  .input(productCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      return await ctx.prisma.product.create({
        data: {
          name: input.name,
          price: input.price,
          stock: input.stock,
          code: input.code,
          weight: input.weight,
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

export const getAllProduct = superAdminProcedure.query(({ ctx }) => {
  return ctx.prisma.product.findMany();
});

export const getByIdProduct = superAdminProcedure
  .input(idSchema)
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.product.findUnique({
      where: { id },
    });
  });

export const deleteProduct = superAdminProcedure
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

export const editProduct = superAdminProcedure
  .input(productUpdateSchema)
  .mutation(async ({ ctx, input }) => {
    const { id, name } = input;
    try {
      return await ctx.prisma.product.update({
        where: { id },
        data: {
          name: name,
          price: input.price,
          stock: input.stock,
          code: input.code,
          weight: input.weight,
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
