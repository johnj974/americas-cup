import { Component, OnInit } from '@angular/core';
import { NewsCard } from '../models/newscard.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
