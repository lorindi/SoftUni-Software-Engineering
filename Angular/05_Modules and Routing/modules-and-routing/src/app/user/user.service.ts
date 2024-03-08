import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // getSingleUser(id: any): User | import("rxjs").Observable<User> | Promise<User> {
  //     throw new Error('Method not implemented.');
  // }
  private API = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.API);
  }
  getSingleUser(id: string) {
    return this.http.get<User>(`${this.API}/${id}`);
  }
}
