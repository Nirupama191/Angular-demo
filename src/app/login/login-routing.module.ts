import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { LoginSuccessScreenComponent } from "./login-success-screen/login-success-screen.component";
import { LoginFailScreenComponent } from "./login-fail-screen/login-fail-screen.component";

const routes: Routes = [
  { path: "signin", component: LoginScreenComponent },
  { path: "success", component: LoginSuccessScreenComponent },
  { path: "failure", component: LoginFailScreenComponent },
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginRoutingModule {}
