import { createTRPCRouter } from "../configs";
import { brandRouter } from "./brands";

// This is the primary router for your server.
export const appRouter = createTRPCRouter({
  brands: brandRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
