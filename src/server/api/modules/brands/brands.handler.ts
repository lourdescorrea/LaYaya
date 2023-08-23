import { TRPCError } from "@trpc/server";
import { superAdminProcedure } from "../../configs";

import { brandCreateSchema, brandUpdateSchema, idSchema } from "yaya/shared";

export const createBrand = superAdminProcedure
  .input(brandCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      return await ctx.prisma.brand.create({
        data: {
          name: input.name,
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

export const getAllBrand = superAdminProcedure.query(({ ctx }) => {
  return ctx.prisma.brand.findMany();
});

export const deleteBrand = superAdminProcedure
  .input(idSchema)
  .mutation(async ({ input, ctx }) => {
    const { id } = input;
    try {
      return await ctx.prisma.brand.delete({
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

export const editBrand = superAdminProcedure
  .input(brandUpdateSchema)
  .mutation(async ({ ctx, input }) => {
    const { id, name } = input;
    try {
      return await ctx.prisma.brand.update({
        where: { id },
        data: {
          name: name,
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
