"use client";

import { usePromisse } from "@/hooks/useFetch";
import { useUrls } from "@/hooks/useUrlsFromLocalStorage";
import { useEffect, useState } from "react";
import ClickChart from "./chart";
import { useWeekData } from "@/hooks/useWeekData";

export function LinksAnalytics() {
  const { weekData } = useWeekData();

  return (
    <div className="h-96">
      <p>Total click this month: {weekData.totalClicks}</p>
      <ClickChart data={weekData} />
    </div>
  );
}
