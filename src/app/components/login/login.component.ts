import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService){

  }

  logar(){
    this.loginService.doLogin();
  }

  deslogar(){
    this.loginService.doLogout();
  }
}
