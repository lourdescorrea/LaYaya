import { createTRPCRouter } from "../configs";
import { brandRouter } from "./brands";
import { cloudinaryRouter } from "./cloudinary";
import { productRouter } from "./products";

// This is the primary router for your server.
export const appRouter = createTRPCRouter({
  brands: brandRouter,
  cloudinary: cloudinaryRouter,
  products: productRouter,
});

// Export type definition of API
export type AppRouter = typeof appRouter;
