import { supabaseClient } from "src/utility";
import { useQuery } from "react-query";

export function getProjectsCategories(client: typeof supabaseClient) {
  return client
    .from("PostCategories")
    .select(`*`)
    .order("created_at")
    .throwOnError();
}

function useProjectsCategories() {
  const key = "PostCategories";

  return useQuery(key, async () => {
    return getProjectsCategories(supabaseClient).then((result) => result.data);
  });
}

export default useProjectsCategories;
