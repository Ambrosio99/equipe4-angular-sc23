import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { CreateTaskComponent } from "./components/create-task/create-task.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { EditTaskComponent } from "./components/edit-task/edit-task.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [CreateTaskComponent, TaskListComponent, EditTaskComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, DatePipe],
  providers: [DatePipe],
})
export class TasksModule {}
