import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
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
            this.route.navigate(['/partners']);
        },
        error: (e: any) => this.valid = false
      });
  }
}
