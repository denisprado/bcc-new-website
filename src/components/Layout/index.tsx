import Footer from "@components/Footer";
import Header from "@components/Header";
import { ReactNode } from "react";
import Contact from '@components/Contact'
import Box from "@components/Box";
interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<Header />
			{children}
			<Box className="w-full px-4" color="neutral"><Contact /></Box>
			<Footer />
		</div>
	)
}