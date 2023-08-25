import { createTRPCRouter } from "../../configs";
import * as cloudinary from "./cloudinary.handler";

export const cloudinaryRouter = createTRPCRouter({
  create: cloudinary.fileUpload,
});
