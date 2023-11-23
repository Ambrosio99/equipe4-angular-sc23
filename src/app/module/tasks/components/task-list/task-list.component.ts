import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Router } from "@angular/router";
import { TaskModel } from "../../models/task.model";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  public taskList: TaskModel[] = [];
  public selectedTask: object = {};

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
  }

  navigateToAddTask() {
    this.router.navigate(["/add-task"]);
  }

  selectTask(task: object) {
    this.selectedTask = task;
    console.log(this.selectedTask);
  }
}
