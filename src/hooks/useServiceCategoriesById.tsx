import { supabaseClient } from "src/utility"
import { useQuery } from 'react-query'

export function getServiceCategoriesById(
	client: typeof supabaseClient,
	id: string
) {
	return client
		.from('ServiceCategories')
		.select(`*`)
		.eq('id', id)
		.throwOnError()
}

function useServiceCategoriesById(id: string) {

	const key = ['serviceCategoriesById', id];

	return useQuery(key, async () => {
		return getServiceCategoriesById(supabaseClient, id).then(
			(result) => result.data
		);
	});
}

export default useServiceCategoriesById;