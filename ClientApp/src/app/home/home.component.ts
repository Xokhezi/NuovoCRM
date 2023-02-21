import { fadeIn } from './../animations/animations';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeIn
  ]
})
export class HomeComponent {
  user = { Role: '' };

  constructor(public service: AuthService) { }
  ngOnInit(): void {
    this.user = this.service.getcurrentUser();
  }

}
