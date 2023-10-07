import { adminProcedure } from "../../configs";
import { TRPCError } from "@trpc/server";
import { v2 as cloudinary } from "cloudinary";
import { env } from "yaya/env.mjs";

export const fileUpload = adminProcedure.mutation(() => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);

    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp,
        folder: env.CLOUDINARY_FOLDER,
      },
      env.CLOUDINARY_API_SECRET
    );

    return {
      uploadUrl: `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/auto/upload/`,
      signature,
      timestamp,
      apikey: env.CLOUDINARY_API_KEY,
      folder: env.CLOUDINARY_FOLDER,
    };
  } catch (error) {
    console.log("error in trpc cloudinary: ", error);
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Error creating signed url for Cloudinary",
      cause: error,
    });
  }
});
