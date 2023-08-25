import { createTRPCRouter } from "../configs";
import { brandRouter } from "./brands";
import { cloudinaryRouter } from "./cloudinary";

// This is the primary router for your server.
export const appRouter = createTRPCRouter({
  brands: brandRouter,
  cloudinary: cloudinaryRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
