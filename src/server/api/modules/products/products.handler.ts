import { TRPCError } from "@trpc/server";
import { adminProcedure } from "../../configs";

import { productCreateSchema } from "yaya/shared/schemas/products";

export const createProduct = adminProcedure
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
