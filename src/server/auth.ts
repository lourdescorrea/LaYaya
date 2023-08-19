import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authPaths } from "yaya/core";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      role: string;
    };
  }

  interface User {
    role: string;
  }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token = {
          name: user?.name,
          email: user?.email,
          role: user?.role,
        };
      }

      return token;
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        role: user?.role,
      },
    }),
  },
  providers: [
    CredentialsProvider({
      name: "email & password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(data) {
        // TODO: Add real logic for users
        const user = "admin";
        const password = "123456";

        if (data?.email === user && data?.password === password) {
          return {
            id: "1",
            name: "Admin",
            email: "admin",
            role: "admin",
          };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: authPaths.login,
  },
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
