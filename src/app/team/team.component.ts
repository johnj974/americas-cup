import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Boat } from '../models/boat.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  boats: Boat[] = [
    new Boat(
      '1',
      'New Zealand',
      'Te Rehutai',
      'Team Emirates New Zealand',
      'aa',
      'bb',
      'Emirates',
      'assets/images/new-zealand-boat2.jpg',
      'assets/images/nz-flag.gif'
    ),
    new Boat(
      '2',
      'Italy',
      'Luna Rossa',
      'Prada Pirelli',
      'Francesco Bruni',
      'Jimmy Spithall',
      'Prada, Pirelli',
      'assets/images/italy3-boat.jpg',
      'assets/images/italyFlag.gif'
    ),
    new Boat(
      '3',
      'UK',
      'Britannia',
      'Ineos Team UK',
      'Ben Ainslie',
      'Ben Ainslie',
      'Ineos',
      'assets/images/uk-boat.jpg',
      'assets/images/uk-flag.gif'
    ),
    new Boat(
      '4',
      'USA',
      'Patriot',
      'American Magic',
      '',
      'Dean Barker',
      'Airbus',
      'assets/images/american-boat.jpg',
      'assets/images/us-flag.gif'
    ),
  ];

  displayBoat: Boat;
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.displayBoat = this.boats[this.id];
    });
  }
}
