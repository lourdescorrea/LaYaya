import { type NextPage } from "next";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppProps } from "next/app";
import Head from "next/head";
import { type PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

import { APP_NAME, DashboardLayout, api } from "yaya/core";
import "yaya/core/styles/globals.css";

type CustomNextPage = NextPage & {
  role?: string;
  Layout?: (props: PropsWithChildren) => JSX.Element;
};

interface CustomAppProps extends AppProps<{ session: Session | null }> {
  Component: CustomNextPage;
}

const App = ({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) => {
  const Layout = Component.Layout ?? DashboardLayout;

  return (
    <SessionProvider session={session}>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Toaster />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default api.withTRPC(App);
