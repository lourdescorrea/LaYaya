import { allRolesProcedure } from "../../configs";
import { TRPCError } from "@trpc/server";
import {
  SHOPS_STOCK,
  ShopStockKey,
  idSchema,
  saleCreateSchema,
} from "yaya/shared";

//TODO: Cancelar venta
// 1 llamo al productonsale, para cada productonsale le hago una suma del producto que se habia vendido

export const getAllSale = allRolesProcedure.query(({ ctx }) => {
  return ctx.prisma.sale.findMany({
    where: {
      shop: {
        in: ctx.session.user.shops,
      },
    },
  });
});

export const getByIdSale = allRolesProcedure
  .input(idSchema)
  .query(({ ctx, input }) => {
    const { id } = input;
    return ctx.prisma.sale.findUnique({
      where: { id },
      include: {
        productsOnSale: true,
      },
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

      const productIds = input.productsOnSale.map((p) => p.productId);

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
          (p) => p.id === productInput.productId
        );

        if (
          productWithStock &&
          productWithStock[shopKey] < productInput.quantity
        ) {
          throw new Error(
            `No hay suficiente stock disponible para el producto con ID ${productInput.productId}`
          );
        }
      }

      const productsOnSale = productsDB.map((p) => {
        const productInput = input.productsOnSale.find(
          (pos) => p.id === pos.productId
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
