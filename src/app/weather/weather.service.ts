import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {
  catchError,
  filter,
  map,
  mergeMap,
  pluck,
  retry,
  share,
  switchMap,
  tap,
  toArray,
} from 'rxjs/operators';
import { WeatherResponse } from './weather.response';
import { NotificationsService } from '../notifications/notifications.service';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  constructor(
    private http: HttpClient,
    private notificationsService: NotificationsService
  ) {}

  getForecast() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', 'metric') //imperial for ferhenheit
          .set('appid', 'ba8fd1ff5c4fc5fa1a33e58f9cd6e721');
      }),
      switchMap((params) => {
        return this.http.get<WeatherResponse>(this.apiUrl, { params: params });
      }),
      pluck('list'),
      mergeMap((value) => of(...value)),
      filter((value, index) => index % 8 === 0),
      map((value) => {
        return {
          dateString: value.dt_tx,
          temp: value.main.temp,
        };
      }),
      toArray(),
      share()
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => {
          observer.error('Failed to get location');
        }
      );
    }).pipe(
      retry(2),
      tap(
        () => {
          this.notificationsService.addSuccess('Weather data fetched');
        },
        () => {}
      ),
      catchError((err) => {
        this.notificationsService.addError('Failed to fetch weather data');
        return throwError(err);
      })
    );
  }
}
