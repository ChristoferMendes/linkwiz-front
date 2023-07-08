export interface Url {
  fullUrl: string;
  shortUrl: string;
  clicks: number;
  clickHistory: {
    date: string;
    count: number;
  }[];
  lastClickDate: string;
}
