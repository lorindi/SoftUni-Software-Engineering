import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';



@NgModule({
  declarations: [
    GlobalLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [GlobalLoaderComponent],
})
export class CoreModule { }
