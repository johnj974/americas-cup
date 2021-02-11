import { Component, OnInit } from '@angular/core';
import { NewsCard } from '../models/newscard.model';
import { CovidService } from '../services/covid.service';
import { CovidReport } from '../models/covidReport';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  covidInfo: CovidReport[];

  constructor(private covidService: CovidService) {}

  ngOnInit(): void {
    // this.getReports();
    this.getReport();
  }

  getReport() {
    this.covidService
      .getCovidInfo()
      .pipe(
        map((data: CovidReport) => {
          const responseArray = [];
          for (const key in data) {
            responseArray.push(...data[key]);
          }
          return responseArray;
        })
      )
      .subscribe((data) => {
        this.covidInfo = data;
      });
  }

  // public getReports() {
  //   this.covidService
  //     .getCovidInfo()
  //     .pipe(
  //       map((data: CovidReport) => {
  //         const responseArray = [];
  //         for (const key in data) {
  //           responseArray.push(...data[key]);
  //         }
  //         return responseArray;
  //       })
  //     )
  //     .subscribe((data) => {
  //       this.covidInfo = data;
  //       // this.covidInfo.push(receivedData);
  //       console.log(this.covidInfo);
  //     });
  // }

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
