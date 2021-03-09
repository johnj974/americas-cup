import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthInterface>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJNPFhi0v7Kw8CN9pd6V0Zz9WG9hwkAoM',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}

interface AuthInterface {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}
