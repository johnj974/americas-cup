import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient) {}

  public postPosts(data) {
    this.http
      .post(
        'https://americas-cup-6026a-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        data
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  public retrievePosts() {
    return this.http
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
      );
  }
}
