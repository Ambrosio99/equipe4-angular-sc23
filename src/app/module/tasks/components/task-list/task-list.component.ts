import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { Router } from "@angular/router";
import { TaskModel } from "../../models/task.model";
import { Title } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"],
})
export class TaskListComponent implements OnInit {
  isChecked: boolean = false;
  dateNow: any;
  public taskList: TaskModel[] = [];
  public selectedTask: TaskModel = { title: " ", category: "", done: false, description: "", color: "" };
  public taskNumber: number = this.taskService.tasks.length;

  constructor(private taskService: TaskService, private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks();
    this.attDateNow();
  }

  attDateNow() {
    const hoje = new Date();
    this.dateNow = this.datePipe.transform(hoje, "dd 'de' MMMM");
  }

  navigateToAddTask() {
    this.router.navigate(["/add-task"]);
  }

  selectTask(task: TaskModel, index: number) {
    this.selectedTask = task;
    this.taskService.indexTask = index;
  }

  editTask() {
    if (this.taskService.indexTask > -1) {
      this.router.navigate(["/edit-task"]);
    }
  }

  deleteTask() {
    this.taskService.delete(this.selectedTask.title);
  }
}
