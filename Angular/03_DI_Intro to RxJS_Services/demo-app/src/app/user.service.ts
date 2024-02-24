import { Injectable } from '@angular/core';
import { User } from 'src/types/JsonPlaceholderUser';

// @Injectable({
//   providedIn: 'root'
// })
export class UserService {
  // users: User[] = [
  //   { name: 'Lora', age: 27 },
  //   { name: 'Ivan', age: 35 },
  //   { name: 'Victor', age: 37 },
  //   { name: 'Lara', age: 8 },
  //   { name: 'Irein', age: 16 },
  // ];
  users: User[] = [

  ];


  constructor() {
    // setInterval(() => {
    //   this.users.push({
    //     name: 'DemoName',
    //     age: 0,
    //   });
    //   console.log('User has been added!');
    // }, 3000);
  }

  addUser(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
    // const user = {
    //   name: inputName.value,
    //   age: Number(inputAge.value),
    // };
    // this.users.push(user);
    // this.users = [...this.users, user];
    inputName.value = '';
    inputAge.value = '';
  }
  // ngOnDestroy(){
  // }

  getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
  }
}
