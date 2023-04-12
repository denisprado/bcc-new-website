import { supabaseClient } from "src/utility";
import { useQuery } from "react-query";

export function getProjectsCategories(client: typeof supabaseClient) {
  return client.from("History").select(`*`).throwOnError().order("date");
}

function useHistory() {
  const key = "History";

  return useQuery(key, async () => {
    return getProjectsCategories(supabaseClient).then((result) => result.data);
  });
}

export default useHistory;
