import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompetitionService } from '../services/competition.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  winnersList: string[] = ['New Zealand', 'Italy', 'USA', 'UK'];

  displayMessage: boolean = false;

  constructor(
    private http: HttpClient,
    private competitionService: CompetitionService
  ) {}

  ngOnInit(): void {}

  onSaveForm(entryForm: NgForm) {
    this.displayMessage = true;
    let postData = entryForm.value;
    this.competitionService.postPosts(postData);
    entryForm.reset();
  }
}
