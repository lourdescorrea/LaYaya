import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "process";
import { appRouter, createTRPCContext } from "yaya/server";

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
