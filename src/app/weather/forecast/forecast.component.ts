import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  // forecast$:Observable<{dateString:string,temp:number}>
  forecastData = [];
  constructor(private weatherService: WeatherService) {
    this.weatherService.getForecast().subscribe((weatherResponse) => {
      console.log(weatherResponse);
      this.forecastData = weatherResponse;
      // this.forecast$ = weatherResponse;
    });
  }

  ngOnInit(): void {}
}
