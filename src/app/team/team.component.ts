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
      'assets/images/new-zealand-boat2.jpg'
    ),
    new Boat('2', 'Italy', 'Luna Rosa', 'assets/images/italy3-boat.jpg'),
    new Boat('3', 'UK', 'Rita', 'assets/images/uk-boat.jpg'),
    new Boat('4', 'USA', 'American Dream', 'assets/images/american-boat.jpg'),
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
