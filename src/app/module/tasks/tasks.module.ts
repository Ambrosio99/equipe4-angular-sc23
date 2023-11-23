import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateTaskComponent } from "./components/create-task/create-task.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskListComponent } from "./components/task-list/task-list.component";

@NgModule({
  declarations: [CreateTaskComponent, TaskListComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class TasksModule {}
