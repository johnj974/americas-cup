import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
})
export class CompetitionComponent implements OnInit {
  winnersList: string[] = ['New Zealand', 'Italy', 'USA', 'England'];

  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onSaveForm(entryForm: NgForm) {
    let postData = entryForm.value;
    this.http
      .post(
        'https://americas-cup-6026a-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  // this function called in ngOnInit so that info is available immediately
  private fetchPosts() {
    this.http
      .get(
        'https://americas-cup-6026a-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.loadedPosts = posts;
        console.log(this.loadedPosts);
      });
  }
}
