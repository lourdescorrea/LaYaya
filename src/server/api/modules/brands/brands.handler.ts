import { protectedProcedure } from "../../configs";

import { PERMISSIONS, brandSchema } from "yaya/shared";

export const createBrand = protectedProcedure(PERMISSIONS.ALL_ROLES)
  .input(brandSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const newBrand = await ctx.prisma.brand.create({
        data: {
          name: input.name,
        },
      });

      return {
        success: true,
        message: "Brand created successfully",
        brand: newBrand, // Devuelve la marca creada
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to create brand",
        error: error.message,
      };
    }
  });
