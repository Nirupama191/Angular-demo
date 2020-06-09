import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginScreenComponent } from "./login-screen/login-screen.component";
import { LoginSuccessScreenComponent } from "./login-success-screen/login-success-screen.component";
import { LoginFailScreenComponent } from "./login-fail-screen/login-fail-screen.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginScreenComponent,
    LoginSuccessScreenComponent,
    LoginFailScreenComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    LoginRoutingModule],
})
export class LoginModule {}
