import { TRPCError } from "@trpc/server";
import { v2 as cloudinary } from "cloudinary";

// todo: export the schema from yaya/shared
import { env } from "yaya/env.mjs";
import { imageCreateSchema } from "yaya/shared/schemas/cloudinary";
import { adminProcedure } from "../../configs";

export const fileUpload = adminProcedure
  .input(imageCreateSchema)
  .mutation(async ({ ctx, input }) => {
    try {
      const timestamp = Math.round(new Date().getTime() / 1000);
      const folder = "productos_yata"; // todo env var

      const signature = cloudinary.utils.api_sign_request(
        {
          timestamp,
          folder,
        },
        env.CLOUDINARY_API_SECRET
      );

      return {
        uploadUrl: `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/auto/upload/`,
        signature,
        timestamp,
        apikey: env.CLOUDINARY_API_KEY,
        folder,
      };
    } catch (error) {
      console.log("error in trpc cloudinary: ", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Error uploading image to Cloudinary",
        cause: error,
      });
    }
  });
