import Box from "@components/Box";
import Layout from "@components/Layout";
import ServiceLayout from "@components/ServiceLayout";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import useServiceCategoriesById from "src/hooks/useServiceCategoriesById";
import useServiceByCategory from "src/hooks/useServices";
import useServiceQuery from "src/hooks/useServices";

function ServicePage() {
	const router = useRouter();
	const { categoryId } = router.query;

	const id = typeof categoryId === 'string' ? categoryId : ''
	const {
		data: services,
		isLoading,
		isError
	} = useServiceByCategory(id);

	const { data: category } = useServiceCategoriesById(id)

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error</div>;
	}


	return (
		<div className="grid grid-cols-3 m-4 min-h[120px] gap-4">
			{services && services.map(service => {
				return (
					<Box key={service.id} className={'p-10 flex flex-col gap-2'}>
						<h3 className="text-accent">{category && category[0].title}</h3>
						<p className="text-3xl font-regular">{service.description}</p>
					</Box>)
			})}
		</div>
	);
}

ServicePage.noLayout = true

ServicePage.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<ServiceLayout>{page}</ServiceLayout>
		</Layout>
	)
}

export default ServicePage