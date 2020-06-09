import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-fail-screen',
  templateUrl: './login-fail-screen.component.html',
  styleUrls: ['./login-fail-screen.component.css']
})
export class LoginFailScreenComponent implements OnInit {

  message = 'Login Fail';
  
  constructor() { }

  ngOnInit() {
  }

}
