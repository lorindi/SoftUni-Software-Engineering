import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `<div style="border: 3px solid lightblue;">
    <div  id="nav-wrapper">Hello navigation from nav.component.ts</div>
    <div>{{titleVar}}</div>
    </div>`,
  styles: ['div #nav-wrapper: {color: "pink";}'],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
titleVar = 'Hallo Title'
titleTemplateUrl = 'HalloTitle Template Url'
}
