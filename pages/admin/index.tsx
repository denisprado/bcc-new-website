import {
	NavigateToResource
} from "@refinedev/nextjs-router";
import type { NextPage } from "next";
import { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	noLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function Admin({ Component, pageProps }: AppPropsWithLayout): JSX.Element {


	return <NavigateToResource resource="blog_posts" />;
}

Admin.noLayout = true
export default Admin;
