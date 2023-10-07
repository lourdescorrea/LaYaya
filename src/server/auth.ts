import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authPaths } from "yaya/core";
import { USERS_ARRAY } from "yaya/shared/constants";

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
  }
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: DefaultSession["user"] & {
      role: string;
      shops: string[];
      userId: string;
    };
  }

  interface User {
    role: string;
    shops: string[];
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
          shops: user?.shops,
          userId: user?.id,
        };
      }

      return token;
    },
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        role: token?.role,
        shops: token?.shops,
        userId: token?.userId,
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
        const user = USERS_ARRAY.find((user) => user.email === data?.email);

        if (
          user &&
          data?.email === user.email &&
          data?.password === user.password
        ) {
          return {
            id: user.id,
            shops: user.shops,
            role: user.role,
            name: user.name,
            email: user.email,
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
