import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  router = inject(Router);
  meessage: string = '';
  loginForm: LoginForm = {
    
    username: '',
    password: '',
    keepMe: false
  };
  check() {
    if (this.loginForm.username == 'admin' && this.loginForm.password == 'admin') {
      sessionStorage.setItem('auth-token','vffvf');
      if(this.loginForm.keepMe==true){
        localStorage.setItem('auth-token','vffvf')
      }
      
      this.router.navigateByUrl('private');
    }
    else {
      this.meessage = 'نام کاربری یا کلمه عبور صحیح نیست'
    }
  }
}
interface LoginForm {
  username: string;
  password: string;
  keepMe: boolean;
}
