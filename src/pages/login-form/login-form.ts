import { AfterViewChecked, Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
})
export class LoginForm implements OnInit{
  username: string = '';
  password: string = '';

  router = inject(Router)

  handleLogin() {
    localStorage.setItem('username', this.username);
    localStorage.setItem('password', this.password);
    console.log(this.username, this.password);
    this.router.navigate(["/home"])
  }

  ngOnInit(): void {
    if (localStorage.getItem('username') != null) {
      localStorage.removeItem('username')
      localStorage.removeItem('password')
    }
  }
}
