import {Component} from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";
  deseaLogearse: boolean = true;
  last_name: string = "";
  name: string = "";
  password_confirmation: string = "";

  login() {
    console.log(this.email)
    console.log(this.password)
  }
}
