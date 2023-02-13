import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user = {
    email: "",
    password: ""
  };
  constructor(private service: AuthService, private route: Router) { }

  login() {
    this.service.login(this.user);
    this.user = {
      email: "",
      password: ""
    };


    //redirect works after wtro clicks - first false
    if (this.service.isLoggedIn())    
      this.route.navigate(['/partners']);
    console.log(this.service.isLoggedIn());
  }
}
