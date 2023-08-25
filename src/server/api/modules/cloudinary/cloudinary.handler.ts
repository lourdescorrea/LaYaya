import { TRPCError } from "@trpc/server";
import { v2 as cloudinary } from "cloudinary";

import { imageCreateSchema } from "yaya/shared/schemas/cloudinary";
import { adminProcedure } from "../../configs";

export const fileUpload = adminProcedure
  .input(imageCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const apiSecret = process.env.CLOUDINARY_API_SECRET;

      if (!apiSecret) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Cloudinary API secret not found in environment variables",
        });
      }

      const signature = cloudinary.utils.api_sign_request(input, apiSecret);

      return {
        imageUrl: signature,
      };
    } catch (error) {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error uploading image to Cloudinary",
        cause: error,
      });
    }
  });
