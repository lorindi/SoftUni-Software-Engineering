import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css'],
})
export class WelcomeMsgComponent {
  @Input('isLoggedIn') isLoggedIn = false;
}
