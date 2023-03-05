import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  passwordRepeat:any;

  registration = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password:"",
    position: "",
    adress: "",    
    country: "",
    leadId: 0    
  };

  step:any;
  isEditable=false;

  ngOnInit(): void {
    this.step=1;
  }
  toDetail()
  {
    this.step=2;
  }
  submit()
  {
    this.step=3;
  }
  register()
  {}
}
