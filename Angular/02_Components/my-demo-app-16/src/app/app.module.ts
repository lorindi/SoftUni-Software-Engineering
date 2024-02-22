import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserListComponent } from './user-list/user-list.component';
import { PlaygroundComponent } from './playground/playground.component';

@NgModule({
  declarations: [AppComponent, NavComponent, NavigationComponent, UserListComponent, PlaygroundComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// Цялостната идея е да имаме class Box и да може от вън да му се подават параметри тук какъв да бъде цветът, така ще има динамика и ще бъдат преизползваеми.
class Box {
  color: string = 'white';
  constructor(color: string) {
    this.color = color;
  }
}
// const redBox = new Box('red');
// const greenBox = new Box('green');

const colors = ['red', 'blue', 'green', 'brown'];
colors.forEach((color) => {
  const box = new Box(color);
});
