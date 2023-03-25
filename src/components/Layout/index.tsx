import Footer from "@components/Footer";
import Header from "@components/Header";
import { ReactNode } from "react";
import Contact from '@components/Contact'
interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<Header />
			{children}
			<Contact />
			<Footer />
		</div>
	)
}