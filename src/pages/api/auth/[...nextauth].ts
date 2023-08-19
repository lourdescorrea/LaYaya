import NextAuth from "next-auth";
import { authOptions } from "yaya/server/auth";

export default NextAuth(authOptions);
