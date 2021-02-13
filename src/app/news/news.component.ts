import { Component, OnInit } from '@angular/core';
import { NewsCard } from '../models/newscard.model';
import { CovidService } from '../services/covid.service';
import { CovidReport } from '../models/covidReport';
import { CompetitionService } from '../services/competition.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  covidInfo = [];
  covidCountry: string;

  compResults = [];
  italy = 0;
  usa = 0;
  uk = 0;
  nz = 0;

  constructor(
    private covidService: CovidService,
    private competitionService: CompetitionService
  ) {}

  ngOnInit(): void {
    this.getReport();
    this.fetchResults();
  }

  getReport() {
    this.covidService.getCovidInfo().subscribe((data) => {
      console.log(data);
      this.covidCountry = data.country;
      this.covidInfo.push(data);
      console.log(this.covidInfo);
    });
  }

  private fetchResults() {
    this.competitionService.retrievePosts().subscribe((posts) => {
      this.compResults = posts;
      console.log(this.compResults);
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
      'assets/images/american-boat.jpg',
      'head1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium nam .',
      'a name'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'head1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium nam .',
      'a name'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'head1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium nam .',
      'a name'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'head1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium nam .',
      'a name'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'head1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium nam .',
      'a name'
    ),
    new NewsCard(
      'assets/images/american-boat.jpg',
      'head1',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laudantium nam .',
      'a name'
    ),
  ];
}
