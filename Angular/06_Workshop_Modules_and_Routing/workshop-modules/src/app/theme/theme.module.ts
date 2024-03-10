import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { ThemeRoutingModule } from './theme-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ThemesListComponent } from './themes-list/themes-list.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    CurrentThemeComponent,
    ThemesListComponent,
    PostsListComponent,
    MainComponent,

  ],
  imports: [CommonModule, ThemeRoutingModule, SharedModule],
})
export class ThemeModule {}
