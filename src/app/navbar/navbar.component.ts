import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  //.
  user: Subscription;

  constructor(private authService: AuthService) {}

  logOutLink: boolean = false;

  loggedOut = false;

  ngOnInit(): void {
    this.user = this.authService.signedUpUser.subscribe((data: boolean) => {
      this.logOutLink = data;
    });
  }

  onLogOut() {
    this.authService.logout();
    this.loggedOut = true;
    this.logOutLink = false;
    setTimeout(() => {
      this.loggedOut = false;
    }, 5000);
  }

  ngOnDestroy() {
    this.user.unsubscribe();
  }
}
