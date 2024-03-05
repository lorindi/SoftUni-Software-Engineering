import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserListComponent],
})
export class UserModule {}
