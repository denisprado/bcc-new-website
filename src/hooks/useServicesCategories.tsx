import { supabaseClient } from "src/utility"
import { useQuery } from 'react-query'

export function getServiceCategories(
	client: typeof supabaseClient,

) {
	return client
		.from('ServiceCategories')
		.select(`*`)
		.throwOnError()
}

function useServiceCategories() {

	const key = 'serviceCategories';

	return useQuery(key, async () => {
		return getServiceCategories(supabaseClient).then(
			(result) => result.data
		);
	});
}

export default useServiceCategories;