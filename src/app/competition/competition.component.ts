import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSaveForm(entryForm: NgForm) {
    console.log(entryForm);
  }

  winnersList: string[] = ['New Zealand', 'Italy', 'USA', 'England'];
}
