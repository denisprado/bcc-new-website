import CookiesNotice from "@components/CookieConsent";
import { Header } from "@components/HeaderAdmin";
import { ColorModeContextProvider } from "@contexts";
import { ThemedLayoutV2, notificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import routerProvider, {
  UnsavedChangesNotifier,
} from "@refinedev/nextjs-router";
import { dataProvider } from "@refinedev/supabase";
import type { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { authProvider } from "src/authProvider";
import { supabaseClient } from "src/utility";
import "../src/styles/styles.css";
import Image from "next/image";
import Logo from "public/structuralImages/logo.png";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  const renderComponent = () => {
    const getLayout = Component.getLayout ?? ((page) => page);
    if (Component.noLayout) {
      return (
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <CookiesNotice />
            {getLayout(<Component {...pageProps} />)}
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      );
    }

    return (
      <ThemedLayoutV2
        Header={Header}
        Title={() => (
          <Image
            className={"bg-primary absolute"}
            src={Logo}
            alt="BCC Consulting"
            width={199}
            height={56}
          ></Image>
        )}
      >
        <Component {...pageProps} />
      </ThemedLayoutV2>
    );
  };

  return (
    <>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(supabaseClient)}
            authProvider={authProvider}
            notificationProvider={notificationProvider}
            resources={[
              {
                name: "Services",
                list: "/servicesAdmin",
                create: "/servicesAdmin/create",
                edit: "/servicesAdmin/edit/:id",
                show: "/servicesAdmin/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              // {
              // 	name: "PostCategories",
              // 	list: "/servicesAdmin",
              // 	create: "/servicesAdmin/create",
              // 	edit: "/servicesAdmin/edit/:id",
              // 	show: "/servicesAdmin/show/:id",
              // 	meta: {
              // 		canDelete: true,
              // 	},
              // },
              {
                name: "Posts",
                list: "/postsAdmin",
                create: "/postsAdmin/create",
                edit: "/postsAdmin/edit/:id",
                show: "/postsAdmin/show/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
            }}
          >
            {renderComponent()}
            <RefineKbar />

            <UnsavedChangesNotifier />
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </>
  );
}

export default MyApp;
