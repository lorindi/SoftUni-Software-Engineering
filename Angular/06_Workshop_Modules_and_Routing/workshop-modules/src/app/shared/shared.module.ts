import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoaderComponent, WelcomeMsgComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoaderComponent, WelcomeMsgComponent],
})
export class SharedModule {}
