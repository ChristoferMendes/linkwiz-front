"use client";

import { Url } from "@/entities/Url/types";
import { useEffect, useState } from "react";
import { AnimatedList } from "react-animated-list";

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
    <div>
      <AnimatedList animation="grow">
        {urls.map((url) => (
          <p>{url.fullUrl}</p>
        ))}
      </AnimatedList>
    </div>
  );
}
