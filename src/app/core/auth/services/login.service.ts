import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LoginCredentials } from "../models/login-credentials.model";
import { UserToken } from "../models/user-token";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private apiBaseUrl = "http://localhost:5000/login";

  constructor(private http: HttpClient) {}

  public login(credentials: LoginCredentials): Observable<UserToken> {
    return this.http.post<UserToken>(this.apiBaseUrl, credentials);
  }

  public isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem("TOKEN");
    return token ? of(true) : of(false);
  }
}
