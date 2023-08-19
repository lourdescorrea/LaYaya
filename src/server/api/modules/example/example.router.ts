import { createTRPCRouter } from "../../configs";
import * as example from "./example.handler";

export const exampleRouter = createTRPCRouter({
  hello: example.hello,
  getAll: example.getAll,
  getSecretMessage: example.getSecretMessage,
});
