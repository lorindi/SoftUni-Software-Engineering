import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersListItemComponent } from './users-list-item/users-list-item.component';
import { UserService } from './user.service';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UsersListItemComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
