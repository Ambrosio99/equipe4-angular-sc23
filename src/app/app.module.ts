import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/auth/components/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TasksModule } from "./module/tasks/tasks.module";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TasksModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
