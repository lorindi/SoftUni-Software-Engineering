import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserResolve } from './user-detail/user-detail.resolver';
import { AuthGuard } from './user-detail/user-detail.guard';


@NgModule({
  declarations: [UserListComponent, UserDetailComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'user/list',
        component: UserListComponent,
      },
      {
        path: 'user/detail/:id',
        component: UserDetailComponent,
        resolve: { user: UserResolve },
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [UserListComponent],
})
export class UserModule {}
