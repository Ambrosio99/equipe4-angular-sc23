import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import { TaskModel } from "../../models/task.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit-task",
  templateUrl: "./edit-task.component.html",
  styleUrls: ["./edit-task.component.css"],
})
export class EditTaskComponent implements OnInit {
  editForm: FormGroup;
  public index: number = this.taskService.indexTask;
  public editedTask: TaskModel = { title: " ", category: "", done: false, description: "", color: "" };

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {
    this.editedTask = this.taskService.getTask(this.index);

    this.editForm = new FormGroup({
      title: new FormControl(this.editedTask.title, [Validators.required]),
      limitDate: new FormControl(this.editedTask.limitDate, [Validators.required]),
      category: new FormControl(this.editedTask.category, [Validators.required]),
      color: new FormControl(this.editedTask.color || ""),
      description: new FormControl(this.editedTask.description || ""),
    });
  }

  ngOnInit(): void {
    this.index = this.taskService.indexTask;
  }

  cancelTaks() {
    this.router.navigate(["/task-list"]);
  }

  onSubmit(task: TaskModel) {
    this.taskService.att(task, this.index);
    this.taskService.indexTask = -1;
    this.router.navigate(["/task-list"]);
  }
}
