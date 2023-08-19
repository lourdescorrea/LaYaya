import { createTRPCRouter } from "../configs";
import { exampleRouter } from "./example";

// This is the primary router for your server.
export const appRouter = createTRPCRouter({
  example: exampleRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
