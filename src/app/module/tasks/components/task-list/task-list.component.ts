import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Router } from "@angular/router";
import { TaskModel } from "../../models/task.model";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  public taskList: TaskModel[] = [];
  public selectedTask: TaskModel = ({title: ' ', category: '', done: false, description: '', color: ''});

  constructor(private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  navigateToAddTask() {
    this.router.navigate(["/add-task"]);
  }

  selectTask(task: TaskModel) {
    this.selectedTask = task;
    console.log(this.selectedTask);
  }

  deleteTask () {
    this.taskService.delete(this.selectedTask.title)
  }
}
