import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API = 'https://jsonplaceholder.typicode.com/users';
  constructor() {}

  getUsers(){
    //
  }
}
