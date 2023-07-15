export interface Url {
  _id: string;
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  clickHistory?: {
    date: string;
    count: number;
  }[];
  lastClickDate: string;
}

interface DayData {
  day: string;
  count: number;
}

interface WeekData {
  week: number;
  count: number;
  days: DayData[];
}

export interface AnalyticsData {
  totalClicks: number | undefined;
  weeks: WeekData[] | undefined;
}

export interface ChartDataProps {
  totalClicks: number;
  weeks: WeekData[];
}
