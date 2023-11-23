import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
