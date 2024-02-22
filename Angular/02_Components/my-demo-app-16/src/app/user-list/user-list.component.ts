import { Component } from '@angular/core';
type User = {
  name: string;
  age: number;
  status: string;
};
type UsersInfo = {
  name: string;
  status?: string;
};
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  isToggle = false;
  users = [
    { name: 'Lora', age: 27, status: 'green' },
    { name: 'Ivan', age: 35, status: 'red' },
    { name: 'Renato', age: 27, status: 'yellow' },
    { name: 'Victor', age: 37, status: 'red' },
    { name: 'Lara', age: 8, status: 'yellow' },
    { name: 'Irein', age: 16, status: 'green' },
  ] as User[];

  usersInfo = [
    { name: 'Lora Mitova', status: 'green' },
    { name: 'Ivan Dimitrov' },
    { name: 'Renato Tsachev', status: 'yellow' },
    { name: 'Victor Mavrov' },
    { name: 'Lara Mitova', status: 'yellow' },
    { name: 'Irein Mavrova' },
  ] as UsersInfo[];

  handleClick(event: Event) {
    // console.log('clicked', event);
    console.log('Clicked!');
    this.isToggle = !this.isToggle;
    console.log(this.isToggle);
  }
}
