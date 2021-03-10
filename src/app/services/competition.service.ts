import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class CompetitionService {
  constructor(private http: HttpClient, private authService: AuthService) {}

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
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get(
          'https://americas-cup-6026a-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
          {
            params: new HttpParams().set('auth', user.token),
          }
        );
      }),
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
