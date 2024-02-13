import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  // title = 'hide';
  // toggle = false;
  isActive = false;

  inputValue = 'Hello'

  activeUsers = [
    { name: 'Mitko', age: 22 },
    { name: 'Mitko', age: 23 },
    { name: 'Mitko', age: 24 },
    { name: 'Mitko', age: 25 },
    { name: 'Mitko', age: 26 },
  ];

  handleClick(event: Event, ...args: number[] ): void {
    console.log('clicked!');
    this.isActive = !this.isActive;

    // this.toggle = !this.toggle;
    // console.log(this.toggle);
  }
}
