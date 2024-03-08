import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnDestroy {
  isLoading = false;
  users: User[] = [];
  // counter = 0;
  interval: any;

  constructor(
    private userService: UserService,
    private globalLoaderService: GlobalLoaderService
  ) {}

  ngOnInit(): void {
    this.fetchUsers();

    // this.interval = setInterval(() => {
    //   this.counter += 1;
    //   console.log(this.counter);
    // }, 2000);
  }

  ngOnDestroy(): void {
    //to clear data!
    console.log('On Destroy invoked!');
    clearInterval(this.interval);
  }

  fetchUsers() {
    //before fetch
    this.globalLoaderService.showLoader();

    //start fetching
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;

      //after fetched
      this.globalLoaderService.hideLoader();
    });
  }

  // fetchUsers(){
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading = false
  //   },3000)
  // }
}
