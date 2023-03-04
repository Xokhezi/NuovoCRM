import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user:any
  step:any;
  isEditable=false;

  ngOnInit(): void {
    this.step=1;
  }
  register()
  {}
}
