import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: TodoListComponent},
  {path: 'user-list', component: UserListComponent},
  {path: 'todo-list', component: TodoListComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
