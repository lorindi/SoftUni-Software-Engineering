import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserListComponent } from './user/user-list/user-list.component';
// import { ErrorPageComponent } from './shared/error-page/error-page.component';

// const routes: Routes = [
//   // {path: '', pathMatch: 'full', component: TodoListComponent},
//   {path: '', pathMatch: 'full', redirectTo: 'user-list'},
//   {path: 'user-list', component: UserListComponent},
//   // {path: 'user/list', component: UserListComponent},

//   {path: 'todo-list', component: TodoListComponent},
//   {path: 'error-page', component: ErrorPageComponent},
//   {path: '**', redirectTo: 'error-page'},


// ];
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'user/list'},
  {path: 'todo-list', component: TodoListComponent},



];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
