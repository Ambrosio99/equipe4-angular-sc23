import { Injectable } from '@angular/core';
import { TaskModel } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: TaskModel [] = [];

  getTasks() {
    return this.tasks;
  };

  getByTitle (title:string) {
    return this.tasks.find(task => task.title === title);
  }

  update (task: TaskModel) {
    let searchTask = this.getByTitle(task.title);

    if (searchTask) {
      searchTask.title = task.title;
      searchTask.limitDate = task.limitDate;
      searchTask.description = task.description;
      searchTask.color = task.color;
      searchTask.category = task.category;
    }
  };

  add(task: TaskModel) {
    this.tasks.push(task)
  };

  delete (title:string) {
    const i = this.tasks.findIndex(task => task.title === title);
    if (i > -1) {
      this.tasks.splice(i, 1);
    };
  };
};
