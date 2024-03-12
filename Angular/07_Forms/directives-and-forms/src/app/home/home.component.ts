import { Component } from '@angular/core';
import { MyStructuralDirective } from '../my-structural.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isShown: boolean = true;

  toggle() {
    this.isShown = !this.isShown;
  }

  simpleClick(directiveRef: MyStructuralDirective) {
    console.log(directiveRef);
  }
}
