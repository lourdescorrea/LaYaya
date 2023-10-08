import { allRolesProcedure } from "../../configs";
import { TRPCError } from "@trpc/server";
import {
  SALE_STATE,
  SHOPS_STOCK,
  idSchema,
  saleCreateSchema,
} from "yaya/shared";

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
        productsOnSale: {
          include: {
            product: {
              include: { brand: true },
            },
          },
        },
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

      const shopKey = SHOPS_STOCK[input.shop];

      if (!shopKey) {
        throw new Error("El local no es una opcion valida.");
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

      const productsOnSale = productsDB.map((p) => {
        const productInput = input.productsOnSale.find(
          (pos) => p.id === pos.productId
        );

        if (p[shopKey] < productInput!.quantity) {
          throw new Error(
            `No hay suficiente stock disponible para el producto ${p.name}`
          );
        }

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
            state: SALE_STATE.ACTIVE,
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

export const cancelSale = allRolesProcedure
  .input(idSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const currentUser = ctx.session.user;

      const saleToCancel = await ctx.prisma.sale.findUnique({
        where: {
          id: input.id,
        },
        include: {
          productsOnSale: true,
        },
      });

      if (!saleToCancel) {
        throw new Error("No se encontró la venta especificada.");
      }

      if (!currentUser.shops.includes(saleToCancel.shop)) {
        throw new Error(
          "El usuario no tiene permiso para cancelar esta venta."
        );
      }

      if (saleToCancel.state !== SALE_STATE.ACTIVE) {
        throw new Error("La venta no se puede cancelar en su estado actual.");
      }

      const shopKey = SHOPS_STOCK[saleToCancel.shop];

      if (!shopKey) {
        throw new Error("El local no es una opcion valida.");
      }

      const result = await ctx.prisma.$transaction(async (prisma) => {
        for (const productOnSale of saleToCancel.productsOnSale) {
          await prisma.product.update({
            where: {
              id: productOnSale.productId,
            },
            data: {
              [shopKey]: {
                increment: productOnSale.quantity,
              },
            },
          });
        }

        const cancelledSale = await prisma.sale.update({
          where: {
            id: input.id,
          },
          data: {
            state: SALE_STATE.CANCELED,
          },
        });

        return cancelledSale;
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
