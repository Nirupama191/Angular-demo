import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-success-screen',
  templateUrl: './login-success-screen.component.html',
  styleUrls: ['./login-success-screen.component.css']
})
export class LoginSuccessScreenComponent implements OnInit {

  message = 'Login Success';
  
  constructor() { }

  ngOnInit() {
  }

}
