import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent]
})
export class SharedModule { }
