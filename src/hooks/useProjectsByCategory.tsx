import { supabaseClient } from "../utility";
import { useQuery } from "react-query";

export function getPostByCategoryId(
  client: typeof supabaseClient,
  postCatId: string
) {
  return client
    .from("Posts")
    .select(`*`)
    .eq("id_post_category", postCatId)
    .throwOnError();
}

function usePostByCategory(postCatId: string) {
  const key = ["post", postCatId];

  return useQuery(key, async () => {
    return getPostByCategoryId(supabaseClient, postCatId).then(
      (result) => result.data
    );
  });
}

export default usePostByCategory;
