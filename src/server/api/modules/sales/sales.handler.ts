import { TRPCError } from "@trpc/server";
import { allRolesProcedure } from "../../configs";

import { idSchema, saleCreateSchema } from "yaya/shared";

//TODO: 1 crear venta:

// 1.1 validar  que el usuario tenga el mismo local que el asignado, lo saco OK

// 1 calcular importe de la venta
//(obtener productos que pertenecen a esa venta, los recorro,
//segun su id y obtengo la cantidad y lo multiplico por el monto,
//luego sumo el total) OK

// 2 crear los productonsale se le pasa la data con lo que necesito OK
// 3 restar el stock//
//validar que la cantidad vendida de un producto no sea mayor
//al stock que hay en ese local
// 4 cuando creas la venta pasarle a el productonsale (createmany)
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
    const currentUser = ctx.session.user;

    if (!currentUser.shops.includes(input.shop)) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message:
          "El usuario no tiene permiso para realizar ventas en este local.",
      });
    }

    let totalAmount = 0;

    try {
      if (!input.productsOnSale) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "La lista de productos en venta está vacía.",
        });
      }

      // Validar el stock y restar el stock
      for (const product of input.productsOnSale) {
        if (!product) continue; // Saltar productos nulos

        const productInDB = await ctx.prisma.product.findUnique({
          where: {
            id: product.id,
          },
        });

        if (!productInDB) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: `Producto con ID ${product.id} no encontrado.`,
          });
        }

        // Verificar si el producto está en stock en la tienda del usuario logueado
        const stockField = `stock${currentUser.shops}`;
        if (product.quantity > productInDB[stockField]) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: `Cantidad vendida de ${productInDB.name} supera el stock disponible en ${currentUser.shops}.`,
          });
        }

        const productAmount = product.quantity * productInDB.price;

        totalAmount += productAmount;
        // Restar la cantidad vendida del stock en la tienda Duarte
        await ctx.prisma.product.update({
          where: {
            id: product.id,
          },
          data: {
            stockDuarte: productInDB.stockDuarte - product.quantity,
          },
        });
      }

      const result = await ctx.prisma.$transaction([
        ctx.prisma.sale.create({
          data: {
            ...input,
            userId: ctx.session.user.id,
            amount: totalAmount,
          },
          productsOnSale: {
            create: input.productsOnSale.map((product) => {
              if (!product) return null;

              const productInDB = await ctx.prisma.product.findUnique({
                where: {
                  id: product.id,
                },
              });

              if (!productInDB) {
                throw new TRPCError({
                  code: "NOT_FOUND",
                  message: `Producto con ID ${product.id} no encontrado.`,
                });
              }

              return {
                ...product,
                amount: product.quantity * productInDB.price,
              };
            }),
          },
        }),
      ]);

      return result[0];
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
