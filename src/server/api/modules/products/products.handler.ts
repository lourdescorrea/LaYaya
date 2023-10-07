import { adminProcedure, allRolesProcedure } from "../../configs";
import { TRPCError } from "@trpc/server";
import {
  idSchema,
  productCreateSchema,
  productUpdateSchema,
} from "yaya/shared";

export const getAllProduct = allRolesProcedure.query(({ ctx }) => {
  return ctx.prisma.product.findMany({
    where: {
      isActive: true,
    },
    include: {
      brand: true,
    },
  });
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
        data: { ...input },
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
    const { id } = input;
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

export const archiveProduct = adminProcedure
  .input(idSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      return await ctx.prisma.product.update({
        where: {
          id: input.id,
        },
        data: { isActive: false },
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: (error as any).message,
        cause: error,
      });
    }
  });
