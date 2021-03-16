import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService, AuthInterface } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLoginMode = true;
  isLoading = false;
  errorMessage: string = '';
  loggedIn = false;

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    let authObservable: Observable<AuthInterface>;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObservable = this.authService.signIn(email, password);
    } else {
      authObservable = this.authService.signUp(email, password);
    }
    authObservable.subscribe(
      (responseData) => {
        console.log(responseData);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.errorMessage = error;
        this.isLoading = false;
      }
    );
    form.reset();
    this.loggedIn = true;
    setTimeout(() => {
      this.loggedIn = false;
    }, 3000);
  }
}
