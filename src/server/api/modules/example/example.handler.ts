import { protectedProcedure, publicProcedure } from "../../configs";

import { PERMISSIONS, helloSchema } from "yaya/shared";

export const hello = publicProcedure.input(helloSchema).query(({ input }) => {
  return {
    greeting: `Hello ${input.text}`,
  };
});

export const getAll = publicProcedure.query(({ ctx }) => {
  return ctx.prisma.example.findMany();
});

export const getSecretMessage = protectedProcedure(PERMISSIONS.ALL_ROLES).query(
  () => {
    return "you can now see this secret message!";
  }
);
