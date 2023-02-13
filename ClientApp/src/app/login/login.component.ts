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
  }

  login()
  {
    //real call must be added
    this.service.login({email:'karel',password:'123'});
    console.log(this.user);
  }

}
