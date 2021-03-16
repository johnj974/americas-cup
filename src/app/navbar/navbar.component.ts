import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user = this.authService.signedUpUser;
  loggedOut = false;

  ngOnInit(): void {}

  onLogOut() {
    this.authService.logout();
    this.loggedOut = true;
    setTimeout(() => {
      this.loggedOut = false;
    }, 3000);
    console.log(this.user);
  }
}
