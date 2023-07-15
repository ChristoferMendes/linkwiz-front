"use client";

import { Url } from "@/entities/Url/types";
import { useEffect, useState } from "react";
import { AnimatedList } from "react-animated-list";
import { CopyToClipBoard } from "./copy-to-clipboard";
import { FullUrlWithIcon } from "./full-url-with-icon";
import { useUrls } from "@/hooks/useUrlsFromLocalStorage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UrlCardList } from "./url-card-list";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";

export function UrlCards() {
  return (
    <div className="w-full h-[340px] overflow-auto">
      <UrlCardList />
    </div>
  );
}
