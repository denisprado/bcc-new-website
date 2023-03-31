import { supabaseClient } from "src/utility";
import { useQuery } from "react-query";

export function getPostCategoriesById(
  client: typeof supabaseClient,
  id: string
) {
  return client.from("PostCategories").select(`*`).eq("id", id).throwOnError();
}

function usePostCategoriesById(id: string) {
  const key = ["postCategoriesById", id];

  return useQuery(key, async () => {
    return getPostCategoriesById(supabaseClient, id).then(
      (result) => result.data
    );
  });
}

export default usePostCategoriesById;
