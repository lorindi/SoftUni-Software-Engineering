import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  isLoading = false;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
      this.users = users;
    });
  }

  // fetchUsers(){
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.isLoading = false
  //   },3000)
  // }
}
