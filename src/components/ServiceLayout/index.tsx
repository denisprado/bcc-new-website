import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import useServiceCategories from "src/hooks/useServicesCategories";
interface LayoutProps {
	children: ReactNode
}

export default function ServiceLayout({ children }: LayoutProps) {

	const {
		data: serviceCategories,
		isLoading,
		isError
	} = useServiceCategories();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="tabs tabs-boxed">
				{serviceCategories?.map(cat => <a className="tab" key={cat.id}><Link href={`${cat.id}`}>{cat.title}</Link></a>)}
			</div>
			{children}
		</div>
	)
}