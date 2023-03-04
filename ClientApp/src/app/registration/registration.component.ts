import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  partner = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    adress: "",
    leadId: 0,
    level: 0,
    teamId: 0,
    country: "",
    userId: 0,
    discountPrimary: 0,
    discountSecundary: 0
  };
  user = {
    id: 0,
    email: "",
    fullName: "",
    password: "",
    role: "",
    country: "",
    adress: "",
    phone: "",
    passwordRepeat: ""
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
  register()
  {}
}
