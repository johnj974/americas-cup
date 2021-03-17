import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  logOutLink: boolean = false;

  user = this.authService.user;
  loggedOut = false;

  ngOnInit(): void {
    console.log(this.user);
  }

  onLogOut() {
    this.authService.logout();
    this.loggedOut = true;
    this.logOutLink = false;
    setTimeout(() => {
      this.loggedOut = false;
    }, 5000);
    console.log(this.user);
  }

  onSignUp() {
    this.logOutLink = true;
  }
}
