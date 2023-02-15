import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { fadeIn } from '../animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    fadeIn
  ]
})
export class LoginComponent {
  valid = true;
  user = {
    email: "",
    password: ""
  };
  constructor(private service: AuthService, private route: Router) { }

  login() {
    this.service.login(this.user)
      .subscribe({
        next: (r: any) => {
          localStorage.setItem('token', r.token)
          if (this.service.isLoggedIn())
            this.route.navigate(['']);
        },
        error: (e: any) => this.valid = false
      });
  }
}
