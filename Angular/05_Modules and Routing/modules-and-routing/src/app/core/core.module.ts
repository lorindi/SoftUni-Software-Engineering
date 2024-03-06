import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { SharedModule } from '../shared/shared.module';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [GlobalLoaderComponent, NavComponent],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [GlobalLoaderComponent, NavComponent],
})
export class CoreModule {}
