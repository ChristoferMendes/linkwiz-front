"use client";

import { Url } from "@/entities/Url/types";
import { useEffect, useState } from "react";
import { AnimatedList } from "react-animated-list";
import { CopyToClipBoard } from "./copy-to-clipboard";
import { FullUrlWithIcon } from "./full-url-with-icon";

export function UrlCard() {
  const [urls, setUrls] = useState<Url[]>([]);

  const getItemsOfLocalStorage = () => {
    const itemsOnLocalStorage = localStorage.getItem("url");
    if (!itemsOnLocalStorage) return;

    setUrls(JSON.parse(itemsOnLocalStorage));
  };

  useEffect(() => {
    addEventListener("storage", () => {
      getItemsOfLocalStorage();
    });

    getItemsOfLocalStorage();
  }, []);

  return (
    <div className="w-full h-[340px] overflow-auto">
      <div className="">
        <AnimatedList animation="grow">
          {urls.map((url) => (
            <div key={url.id} className="bg-primary mb-10 p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className={`font-bold`}>linkWiz/{url.shortUrl}</p>
                  <CopyToClipBoard textToCopy={`linkwiz/${url.shortUrl}`} />
                </div>
                <p className="font-semibold">Total clicks: {url.clicks}</p>
              </div>
              <div className="flex space-x-3">
                <FullUrlWithIcon fullUrl={url.fullUrl} />
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}
