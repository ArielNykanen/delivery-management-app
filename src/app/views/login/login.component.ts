import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginServices } from 'src/app/services/login-services/login.services.ts.component';
import { AnimationServices } from 'src/app/services/animation-services/animation.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  animations: [
  ]
})
export class LoginComponent implements OnInit {
  slided = true;
  loginForm: FormGroup;

  constructor(private loginServices: LoginServices,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'remember': new FormControl(false),
    });
  }

  onLogin() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    const rememberUser = this.loginForm.get('remember').value;
   this.loginServices.loginUser(
     username, password, rememberUser
   );
  }

}
