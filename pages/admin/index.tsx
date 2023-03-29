import { NavigateToResource } from "@refinedev/nextjs-router";
import type { NextPage } from "next";

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  noLayout?: boolean;
};

// type AppPropsWithLayout = AppProps & {
// 	Component: NextPageWithLayout;
// };

function Admin(): JSX.Element {
  return <NavigateToResource resource="posts" />;
}

Admin.noLayout = true;
export default Admin;
