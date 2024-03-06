import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', component: TodoListComponent},
  {path: '', pathMatch: 'full', redirectTo: 'user-list'},
  {path: 'user-list', component: UserListComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'error-page',},
  {path: '**', redirectTo: 'error-page'},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
