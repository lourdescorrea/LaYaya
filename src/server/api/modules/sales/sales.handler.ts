import { TRPCError } from "@trpc/server";
import { allRolesProcedure } from "../../configs";

import {
  SHOPS_STOCK,
  ShopStockKey,
  idSchema,
  saleCreateSchema,
} from "yaya/shared";

// 5 pasarle el estado, local, usuario, etc.

//TODO: Cancelar venta
// 1 llamo al productonsale, para cada productonsale le hago una suma del producto que se habia vendido

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
      const currentUser = ctx.session.user;

      if (!currentUser.shops.includes(input.shop)) {
        throw new Error(
          "El usuario no tiene permiso para realizar ventas en este local."
        );
      }

      const productIds = input.productsOnSale.map((product) => product.id);

      const productsDB = await ctx.prisma.product.findMany({
        where: {
          id: {
            in: productIds,
          },
        },
      });

      let totalAmount = 0;

      const shopKey = SHOPS_STOCK[input.shop] as ShopStockKey;

      for (const productInput of input.productsOnSale) {
        const productWithStock = productsDB.find(
          (p) => p.id === productInput.id
        );

        if (
          productWithStock &&
          productWithStock[shopKey] < productInput.quantity
        ) {
          throw new Error(
            `No hay suficiente stock disponible para el producto con ID ${productInput.id}`
          );
        }
      }

      const productsOnSale = productsDB.map((p) => {
        const productInput = input.productsOnSale.find(
          (pos) => p.id === pos.id
        );

        const productAmount = productInput!.quantity * p.price;

        totalAmount += productAmount;

        return {
          codeBar: p.codeBar,
          image: p.image,
          name: p.name,
          price: p.price,
          quantity: productInput!.quantity,
          weight: p.weight,
          productId: p.id,
        };
      });

      const result = await ctx.prisma.$transaction(async (prisma) => {
        for (const p of productsOnSale) {
          await prisma.product.update({
            where: {
              id: p.productId,
            },
            data: {
              [shopKey]: {
                decrement: p.quantity,
              },
            },
          });
        }

        return await prisma.sale.create({
          data: {
            userId: ctx.session.user.userId,
            amount: totalAmount,
            paymentMethod: input.paymentMethod,
            shop: input.shop,
            state: "ACTIVE",
            productsOnSale: {
              create: productsOnSale,
            },
          },
        });
      });

      return result;
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
