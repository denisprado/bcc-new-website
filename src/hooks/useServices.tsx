import { supabaseClient } from "src/utility"
import { useQuery } from 'react-query'

export function getServiceByCategoryId(
	client: typeof supabaseClient,
	serviceCatId: string
) {
	return client
		.from('Services')
		.select(`*`)
		.eq('id_category_service', serviceCatId)
		.throwOnError()
}

function useServiceByCategory(serviceCatId: string) {

	const key = ['service', serviceCatId];

	return useQuery(key, async () => {
		return getServiceByCategoryId(supabaseClient, serviceCatId).then(
			(result) => result.data
		);
	});
}

export default useServiceByCategory;