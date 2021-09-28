import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsApiModule } from './news-api/news-api.module';
import { NotificationsModule } from './notifications/notifications.module';
import { SharedModule } from './shared/shared.module';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherModule,
    HttpClientModule,
    NotificationsModule,
    NewsApiModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
