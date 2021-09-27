import { Article } from './news-api.service';

export interface NewsApiResponse {
  totalResults: number;
  articles: Article[];
}
