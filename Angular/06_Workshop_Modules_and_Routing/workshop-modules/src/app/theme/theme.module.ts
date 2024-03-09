import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';



@NgModule({
  declarations: [
    AddThemeComponent,
    CurrentThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ThemeModule { }
