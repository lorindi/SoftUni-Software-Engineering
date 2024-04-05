import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcom-msg',
  templateUrl: './welcom-msg.component.html',
  styleUrls: ['./welcom-msg.component.css'],
})
export class WelcomMsgComponent {
  @Input('isLoggedIn') isLoggedIn = false;
}
