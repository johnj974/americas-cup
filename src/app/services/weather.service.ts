import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http.get(
      'http://api.openweathermap.org/data/2.5/weather?q=auckland&units=metric&appid=7b0fd008f9513bea6605a1407a26ec03'
    );
  }
}
