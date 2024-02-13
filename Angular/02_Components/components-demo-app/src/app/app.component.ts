import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'title from AppComponent';
  // users = [{name: 'Lora'}, {name: 'Ivan'}]

  users = [
    { name: 'Mitko', age: 22, lastName: true },
    { name: 'Mitko', age: 23, lastName: true },
    { name: 'Mitko', age: 24, lastName: true },
    { name: 'Mitko', age: 25, lastName: true },
    { name: 'Mitko', age: 26, lastName: true },
  ];

  onOutputFromChild() {
    console.log('onOutputFromChild');

    
  }
}
