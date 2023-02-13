import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  user={
    email:"",
    password:""
  };
  constructor(private service:AuthService) {}

  ngOnInit(): void {    
    this.service.login({email:'karel',password:'123'});
  }

  login()
  {
    console.log(this.user);
  }

}
