import { Component, OnInit } from '@angular/core';
import { NewsCard } from '../models/newscard.model';
import { CovidService } from '../services/covid.service';
import { CovidReport } from '../models/covidReport';
import { CompetitionService } from '../services/competition.service';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  covidInfo = [];
  covidCountry: string;
  weatherData = [];

  compResults = [];
  italy = 0;
  usa = 0;
  uk = 0;
  nz = 0;

  constructor(
    private covidService: CovidService,
    private competitionService: CompetitionService,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.getCovidReport();
    this.fetchResults();
    this.getWeatherReport();
  }

  getCovidReport() {
    this.covidService.getCovidInfo().subscribe((data) => {
      this.covidCountry = data.country;
      this.covidInfo.push(data);
      // console.log(this.covidInfo);
    });
  }

  getWeatherReport() {
    this.weatherService.getWeather().subscribe((data) => {
      this.weatherData.push(data);
      console.log(this.weatherData);
    });
  }

  private fetchResults() {
    this.competitionService.retrievePosts().subscribe((posts) => {
      this.compResults = posts;
      //console.log(this.compResults);
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

  newsList: NewsCard[] = [
    new NewsCard(
      'assets/images/new-zealand-boat.jpg',
      'New Zealand Progress',
      'New Zealand progress easily, Remaining boats to fight for a place in the final. ',
      '-Joe Harrington'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'Patriot Capsize',
      'The American boat Patriot capsizes, All crew members uninjured. Major repairs underway',
      '-Kevin Cashell'
    ),
    new NewsCard(
      'assets/images/uk-boat3.jpg',
      'UK Revival',
      'Ineos team UK start poorly, Unable to adapt to the changing conditions, Major improvements required.',
      '-Sounita Son'
    ),
    new NewsCard(
      'assets/images/italy2-boat.jpg',
      'Italian Masterclass',
      'Prada Pirelli Lunna Rosa take a commanding four race lead in the Prada Cup final to maintain their charge for a final spot.',
      '-Pietro Pielso'
    ),
    new NewsCard(
      'assets/images/americas-bow.jpg',
      'Prada Cup',
      'Ineos team Uk have it all to do after two disappointing days on the water with Prada Pirelli Lunna Rosa opening up a lead.',
      '-Ludo Motoscafo'
    ),
    new NewsCard(
      'assets/images/new-zealand-boat2.jpg',
      'American Cup',
      'Who will contest the final with Emirates team New Zealand.',
      '-Brendan Murray'
    ),
  ];
}
