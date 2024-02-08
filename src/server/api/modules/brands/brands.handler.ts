import { allRolesProcedure } from "../../configs";
import { TRPCError } from "@trpc/server";
import { brandCreateSchema, brandUpdateSchema, idSchema } from "yaya/shared";

export const getAllBrand = allRolesProcedure.query(({ ctx }) => {
  return ctx.prisma.brand.findMany({
    where: {
      isActive: true,
    },
  });
});

export const getByIdBrand = allRolesProcedure
  .input(idSchema)
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.brand.findUnique({
      where: { id },
    });
  });

export const createBrand = allRolesProcedure
  .input(brandCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      return await ctx.prisma.brand.create({
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

export const archiveBrand = allRolesProcedure
  .input(idSchema)
  .mutation(async ({ input, ctx }) => {
    try {
      const { id } = input;
      const brand = await ctx.prisma.brand.findUnique({
        where: { id },
        include: {
          product: {
            where: { isActive: true },
          },
        },
      });

      if (brand && brand.product.length > 0) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se puede archivar una marca con productos activos.",
        });
      }

      return await ctx.prisma.brand.update({
        where: { id: input.id },
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

export const editBrand = allRolesProcedure
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
