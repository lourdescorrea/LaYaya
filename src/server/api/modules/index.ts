import { createTRPCRouter } from "../configs";
import { brandRouter } from "./brands";
import { exampleRouter } from "./example";

// This is the primary router for your server.
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  brands: brandRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
