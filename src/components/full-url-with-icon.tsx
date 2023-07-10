"use client";

import { usePromisse } from "@/hooks/useFetch";
import { api } from "@/services/api";

const getDomain = (url: string) => {
  const urlObject = new URL(url);

  return urlObject.hostname;
};

async function fetchFavIcon(link: string) {
  const domain = getDomain(link);
  const data = api.get(`/url/${domain}/favIcon`);

  return data;
}

interface FavIcon {
  favIcon: string;
}

export function FullUrlWithIcon({ fullUrl }: { fullUrl: string }) {
  const dataPromise = fetchFavIcon(fullUrl);
  const { data, error } = usePromisse<FavIcon>(dataPromise);

  if (error) return <p>error</p>;

  console.log(data);

  return (
    <>
      <div className="flex items-center space-x-4">
        <img src={data?.favIcon} alt="Domain icon" className="w-6" />
        <p className="w-52 xs:w-72 sm:w-96 truncate">{fullUrl}</p>
      </div>
    </>
  );
}
