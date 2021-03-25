import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsCard } from '../models/newscard.model';
import { CovidService } from '../services/covid.service';
import { CompetitionService } from '../services/competition.service';
import { WeatherService } from '../services/weather.service';
import { NewsService } from '../services/news.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit, OnDestroy {
  covidInfo = [];
  covidCountry: string;
  weatherData = [];
  newsListArray: NewsCard[] = [];
  covidSubscription: Subscription;
  weatherSubscription: Subscription;
  competitionSubscription: Subscription;

  compResults = [];
  italy = 0;
  usa = 0;
  uk = 0;
  nz = 0;

  constructor(
    private covidService: CovidService,
    private competitionService: CompetitionService,
    private weatherService: WeatherService,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.getCovidReport();
    this.fetchResults();
    this.getWeatherReport();
    this.newsListArray = this.newsService.newsList;
  }

  getCovidReport() {
    this.covidSubscription = this.covidService
      .getCovidInfo()
      .subscribe((data) => {
        this.covidCountry = data.country;
        this.covidInfo.push(data);
      });
  }

  getWeatherReport() {
    this.weatherSubscription = this.weatherService
      .getWeather()
      .subscribe((data) => {
        this.weatherData.push(data);
      });
  }

  private fetchResults() {
    this.competitionSubscription = this.competitionService
      .retrievePosts()
      .subscribe((posts) => {
        this.compResults = posts;
        for (let i = 0; i < this.compResults.length; i++) {
          if (this.compResults[i].winnerChoice === 'Italy') {
            this.italy += 1;
          }
          if (this.compResults[i].winnerChoice === 'USA') {
            this.usa += 1;
          }
          if (this.compResults[i].winnerChoice === 'UK') {
            this.uk += 1;
          }
          if (this.compResults[i].winnerChoice === 'New Zealand') {
            this.nz += 1;
          }
        }
      });
  }

  ngOnDestroy() {
    this.covidSubscription.unsubscribe();
    this.weatherSubscription.unsubscribe();
    this.competitionSubscription.unsubscribe();
  }
}
