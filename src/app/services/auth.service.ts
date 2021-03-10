import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthInterface>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJNPFhi0v7Kw8CN9pd6V0Zz9WG9hwkAoM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthInterface>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCJNPFhi0v7Kw8CN9pd6V0Zz9WG9hwkAoM',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.handleError));
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
