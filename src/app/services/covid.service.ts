import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidReport } from '../models/covidReport';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  getCovidInfo() {
    return this.http.get<CovidReport>(
      'https://disease.sh/v3/covid-19/countries/New%20Zealand?strict=true'
    );
  }
}
