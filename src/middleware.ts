import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

import { authPaths, defaultRoute, paths, routes } from "yaya/core";
import { env } from "yaya/env.mjs";

const corsHeaders = {
  "Access-Control-Allow-Origin": env.NEXT_PUBLIC_BASE_URL,
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

const checkAuthPath = (path: string) => {
  return {
    isApi: path.startsWith("/api"),
    isAuth: path.startsWith(authPaths.login),
    isAuthApi: path.startsWith(authPaths.api),
  };
};

export default withAuth(
  function middleware(req) {
    const { nextUrl, nextauth } = req;
    const { pathname } = nextUrl;
    const { token } = nextauth;
    const { isApi, isAuth, isAuthApi } = checkAuthPath(pathname);

    // Redirect / to page
    if (pathname === "/" || pathname === "/admin") {
      return NextResponse.redirect(new URL(defaultRoute, req.url));
    }

    // Redirect login to dashboard if user is already logged in
    if (token && isAuth) {
      return NextResponse.redirect(new URL(defaultRoute, req.url));
    }

    // Return 401 for API routes if user is not logged in
    if (isApi && !isAuthApi && !token) {
      return NextResponse.json({ mesaage: "unauthenticated" }, { status: 401 });
    }

    if (!isApi && !isAuth && !isAuthApi && token) {
      const route = routes.find((route) => route.path === pathname);
      if (route && !route.allowedRoles.includes(token.role)) {
        return NextResponse.redirect(
          new URL(paths.notAuthorized.root, req.url)
        );
      }
    }

    // Return with cors headers
    return NextResponse.next({ headers: corsHeaders });
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { isAuth, isApi } = checkAuthPath(req.nextUrl.pathname);
        return !!token || isAuth || isApi;
      },
    },
  }
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|img|favicon.ico|api/trpc).*)", "/"],
};
