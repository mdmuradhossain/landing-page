import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticleListComponent } from './news-article-list/news-article-list.component';

@NgModule({
  declarations: [NewsArticleListComponent],
  imports: [CommonModule],
  exports: [NewsArticleListComponent],
})
export class NewsApiModule {}
