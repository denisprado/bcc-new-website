import { supabaseClient } from "../utility";
import { useQuery } from "react-query";

export async function queryIdImage(
  client: typeof supabaseClient,
  imageId: string
) {
  console.log(imageId);
  const { data: Images } = await client.from("Images").select("*");
  return Images;
}

function useGetUrlImageById(imageId: string) {
  const key = ["imagesId", imageId];

  return useQuery(key, async () => {
    return queryIdImage(supabaseClient, imageId).then((result) => result);
  });
}

export default useGetUrlImageById;
