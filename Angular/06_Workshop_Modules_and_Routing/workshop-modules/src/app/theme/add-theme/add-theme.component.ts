import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css'],
})
export class AddThemeComponent {
  constructor(private apiService: ApiService) {}

  
  addTheme(ev: Event, themeName: string, postText: string) {
    ev.preventDefault();
    console.log({ themeName, postText });

    this.apiService.createTheme(themeName, postText).subscribe((data) => {
      console.log({ data });
    });
  }
}
