import { initTRPC } from "@trpc/server";
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "process";
import { createTRPCContext } from "yaya/server";
import z from "zod";

const t = initTRPC.create();

const appRouter = t.router({
  createBrand: t.procedure
    .input(
      z.object({
        name: z.string(),
      })
    )
    .mutation(({ input }) => {
      return {
        text: `Marca creada: ${input?.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;

// Exportar el API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`
          );
        }
      : undefined,
});
