import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  private url = 'https://newsapi.org/v2/top-headlines';
  private pageSize = 10;
  private apiKey = '7443707e1fe847d59782363093292211';
  private country = 'us';

  constructor() {}
}
