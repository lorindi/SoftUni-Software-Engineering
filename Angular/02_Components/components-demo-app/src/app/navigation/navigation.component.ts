import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  title = 'hide';
  toggle = false;
  handleClick() {
    console.log('clicked!');
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
