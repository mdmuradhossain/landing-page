import { Component, OnInit } from '@angular/core';
import { Article, NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-news-article-list',
  templateUrl: './news-article-list.component.html',
  styleUrls: ['./news-article-list.component.css'],
})
export class NewsArticleListComponent implements OnInit {
  articles: Article[];
  constructor(private newApiService: NewsApiService) {
    this.newApiService.pagesOutput.subscribe((articles) => {
      this.articles = articles;
      console.log(articles);
    });
    this.newApiService.getPage(1);
  }

  ngOnInit(): void {}
}
