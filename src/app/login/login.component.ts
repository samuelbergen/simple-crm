import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailLogIn: string = '';
  passwordLogIn: string = '';
  emailSignUp: string = '';
  passwordSignUp: string = '';

  constructor(public Auth: AuthService) { }

  ngOnInit(): void {
  }

  logIn() {
    this.Auth.logIn(this.emailLogIn, this.passwordLogIn);
  }

  signUp() {
    this.Auth.signUp(this.emailSignUp, this.passwordSignUp);
  }
}
