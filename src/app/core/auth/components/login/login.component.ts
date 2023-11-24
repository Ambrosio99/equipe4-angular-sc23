import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { LoginService } from "../../services/login.service";
import { Router } from "@angular/router";
import { LoginCredentials } from "../../models/login-credentials.model";
import { first } from "rxjs";
import { UserToken } from "../../models/user-token";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  public login(): void {
    const payload: LoginCredentials = this.loginForm.getRawValue();
    this.loginService
      .login(payload)
      .pipe(first())
      .subscribe({
        next: (res: UserToken) => {
          localStorage.setItem("TOKEN", res.token);
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          this.router.navigate(["/task-list"]);
        },
      });
  }
}
