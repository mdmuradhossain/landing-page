import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css'],
})
export class ForecastComponent implements OnInit {
  forecastData = [];
  constructor(private weatherService: WeatherService) {
    this.weatherService.getForecast().subscribe((weatherResponse) => {
      console.log(weatherResponse);
      this.forecastData = weatherResponse;
    });
  }

  ngOnInit(): void {}
}
