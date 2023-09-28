import { TRPCError } from "@trpc/server";
import { brandCreateSchema, brandUpdateSchema, idSchema } from "yaya/shared";
import { allRolesProcedure, superAdminProcedure } from "../../configs";

export const getAllBrand = allRolesProcedure.query(({ ctx }) => {
  return ctx.prisma.brand.findMany({
    where: {
      state: "ACTIVA",
    },
  });
});

export const getByIdBrand = superAdminProcedure
  .input(idSchema)
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.brand.findUnique({
      where: { id },
    });
  });

export const createBrand = superAdminProcedure
  .input(brandCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      return await ctx.prisma.brand.create({
        data: { ...input, state: "ACTIVA" },
      });
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: (error as any).message,
        cause: error,
      });
    }
  });

export const cancelBrand = superAdminProcedure
  .input(idSchema)
  .mutation(async ({ input, ctx }) => {
    const { id } = input;
    const brand = await ctx.prisma.brand.findUnique({
      where: { id },
      include: {
        product: {
          where: { state: "ACTIVA" },
        },
      },
    });

    if (brand && brand.product.length > 0) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "No se puede cancelar  marca con productos activos.",
      });
    }
    try {
      return await ctx.prisma.brand.update({
        where: { id: input.id },
        data: { ...input, state: "CANCELADA" },
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
