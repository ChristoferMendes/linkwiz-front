import { Url } from "@/entities/Url/types";
import { api } from "@/services/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useUrls = () => {
  const queryClient = useQueryClient();

  const getItemsOnLocalStorage = () => {
    const data = queryClient.getQueryData<Url[]>(["urls"]);

    return data;
  };

  const getItems = async () => {
    const urls = getItemsOnLocalStorage();
    console.log(urls);

    if (!urls?.length) return [];

    const ids = urls.map((url) => ({ id: url._id }));

    const res = await api.get("url/findAll", {
      params: {
        ids: ids.map((url) => url.id).join(","),
      },
    });

    return res.data;
  };

  const { data } = useQuery<Url[]>({ queryFn: getItems, queryKey: ["urls"] });

  return { urls: data };
};
