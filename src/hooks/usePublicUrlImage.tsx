import { supabaseClient } from "../utility";
import { useQuery } from "react-query";
import useGetUrlImageById from "./useGetUrlImageById";

export function downloadImage(client: typeof supabaseClient, imageUrl: string) {
  return client.storage.from("project-images").getPublicUrl(imageUrl);
}

function usePublicUrlImage(imageId: string) {
  const { data: imageUrl } = useGetUrlImageById(imageId);
  const key = ["publicUrl", imageUrl];

  const url = imageUrl ? imageUrl[0]?.url : null;
  return useQuery(key, async () => {
    return downloadImage(supabaseClient, url);
  });
}

export default usePublicUrlImage;
