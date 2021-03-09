import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private http: HttpClient, private apiService: ApiService) {}

  weatherKey = this.apiService.weatherKey;

  getWeather() {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=auckland&units=metric&appid=${this.weatherKey}`
    );
  }
}
