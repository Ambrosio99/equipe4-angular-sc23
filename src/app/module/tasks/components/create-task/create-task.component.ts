import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskModel } from "../../models/task.model";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-create-task",
  templateUrl: "./create-task.component.html",
  styleUrls: ["./create-task.component.css"],
})
export class CreateTaskComponent {
  taskForm: FormGroup;
  constructor(private router: Router, private taskService: TaskService) {
    this.taskForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      limitDate: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      color: new FormControl(""),
      description: new FormControl(""),
    });
  }

  onSubmit(task: TaskModel) {
    this.taskService.add(task);
    this.router.navigate(["/task-list"]);
  }

  cancelTaks() {
    this.router.navigate(["/task-list"]);
  }
}
