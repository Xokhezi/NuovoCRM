import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  currentUser:any;
  constructor( private service: UsersService,private authService:AuthService) { }
  ngOnInit(): void {
    this.currentUser=this.authService.getcurrentUser();
  }

}
