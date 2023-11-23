import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./core/auth/components/login/login.component";
import { authGuard } from "./core/guards/auth.guard";
import { TaskListComponent } from "./module/tasks/components/task-list/task-list.component";
import { CreateTaskComponent } from "./module/tasks/components/create-task/create-task.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "task-list",
    component: TaskListComponent,
    canActivate: [authGuard],
  },
  {
    path: "add-task",
    component: CreateTaskComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
