import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // isLoggedIn = false;

  constructor(private userService: UserService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
  get firstName(): string {
    return this.userService.user?.firstName || '';
  }
  logout(){
    this.userService.logout()
    this.router.navigate(['/home'])
  }
}
