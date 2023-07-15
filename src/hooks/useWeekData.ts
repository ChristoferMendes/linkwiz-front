import { useEffect, useState } from "react";
import { useUrls } from "./useUrlsFromLocalStorage";
import { AnalyticsData } from "@/entities/Url/types";

export const useWeekData = () => {
  const { urls } = useUrls();
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const [weekData, setWeekData] = useState({} as AnalyticsData);

  const getData = async () => {
    const res = await fetch(
      `http://localhost:3000/url/${urls?.[0]._id}/${currentYear}/${currentMonth}`
    );

    const data: AnalyticsData = await res.json();
    return data;
  };

  useEffect(() => {
    if (!urls?.length) return;

    (async () => {
      const data = await getData();
      setWeekData(data);
    })();
  }, [urls]);

  return { weekData };
};
