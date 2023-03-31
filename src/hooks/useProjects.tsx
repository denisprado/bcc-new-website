import { supabaseClient } from "src/utility";
import { useQuery } from "react-query";

export function getProjectsCategories(client: typeof supabaseClient) {
  return client.from("Posts").select(`*`).throwOnError();
}

function useProjects() {
  const key = "Post";

  return useQuery(key, async () => {
    return getProjectsCategories(supabaseClient).then((result) => result.data);
  });
}

export default useProjects;
