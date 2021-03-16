import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, throwError } from 'rxjs';
import { UserModel } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);
  signedUpUser: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    this.signedUpUser = true;
    return this.http
      .post<AuthInterface>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJNPFhi0v7Kw8CN9pd6V0Zz9WG9hwkAoM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  signIn(email: string, password: string) {
    this.signedUpUser = true;
    return this.http
      .post<AuthInterface>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJNPFhi0v7Kw8CN9pd6V0Zz9WG9hwkAoM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((responseData) => {
          this.handleAuthentication(
            responseData.email,
            responseData.localId,
            responseData.idToken,
            +responseData.expiresIn
          );
        })
      );
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['']);
    this.signedUpUser = false;
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new UserModel(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email is already in use';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign in disabled';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Unusual activity detected, Try again later';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Unregistered email account';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect Password';
        break;
      case 'USER_DISABLED':
        errorMessage = 'User account disabled, Try again later';
        break;
      default:
        errorMessage = 'An unknown error occured';
    }
    return throwError(errorMessage);
  }
}

export interface AuthInterface {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
