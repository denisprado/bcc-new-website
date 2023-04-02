import { supabaseClient } from "../utility";
import { useQuery } from "react-query";

export function getPostById(client: typeof supabaseClient, postId: string) {
  return client
    .from("Posts")
    .select(`*`)
    .eq("id", postId)
    .single()
    .throwOnError();
}

function usePostById(postId: string) {
  const key = ["post", postId];

  return useQuery(key, async () => {
    return getPostById(supabaseClient, postId).then((result) => result.data);
  });
}

export default usePostById;
