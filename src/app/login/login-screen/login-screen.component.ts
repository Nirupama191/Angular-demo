import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  header = "Login";
  login = new Login();

  constructor(private router: Router) {}

  ngOnInit() {
    this.login = {
      name: "",
      password: "",
    };
  }

  public loginCheck() {
    if (this.login.name == "") alert("User Name is required");
    else if (this.login.password == "") alert("Password is required");
    else {
      if (this.login.name == "admin" && this.login.password == "admin") {
        this.router.navigate(["/login/success"]);
      } else {
        this.router.navigate(["/login/failure"]);
      }
    }
  }

}
