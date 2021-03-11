import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {}

  user = this.authService.user;

  ngOnInit(): void {}

  onLogOut() {
    this.authService.logout();
    console.log('1 am working');
  }
}
