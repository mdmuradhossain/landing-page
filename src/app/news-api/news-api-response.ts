export interface NewsApiResponse {
  totalResults: number;
  articles: {
    title: string;
    description: string;
    url: string;
  }[];
}
