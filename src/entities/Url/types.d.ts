export interface Url {
  id: string;
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  clickHistory?: {
    date: string;
    count: number;
  }[];
  lastClickDate: string;
}
