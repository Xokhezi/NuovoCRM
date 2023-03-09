import { LinkService } from './../services/link.service';
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
  usersLink:any;

  switch=false;
  showLink=false;

  constructor(
     private service: UsersService,
     private authService:AuthService,
     private linkService:LinkService) { }
     
  ngOnInit(): void {
    this.currentUser=this.authService.getcurrentUser();
    this.usersLink=this.linkService.encodeLink(this.currentUser.Email,this.currentUser.Id);
  }
  show()
  {
    this.showLink=true;
  }
  switchInfo()
  {
    this.switch=!this.switch;
  }
}
