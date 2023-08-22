import { protectedProcedure } from "../../configs";

import { PERMISSIONS, brandSchema } from "yaya/shared";

export const createBrand = protectedProcedure(PERMISSIONS.SUPER)
  .input(brandSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const newBrand = await ctx.prisma.brand.create({
        data: {
          name: input.text,
        },
      });

      return {
        success: true,
        message: "Brand created successfully",
        brand: newBrand,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to create brand",
      };
    }
  });
