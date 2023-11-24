import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./core/auth/components/login/login.component";
import { TaskListComponent } from "./module/tasks/components/task-list/task-list.component";
import { CreateTaskComponent } from "./module/tasks/components/create-task/create-task.component";
import { EditTaskComponent } from "./module/tasks/components/edit-task/edit-task.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "task-list", component: TaskListComponent },
  { path: "add-task", component: CreateTaskComponent },
  { path: "edit-task", component: EditTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
