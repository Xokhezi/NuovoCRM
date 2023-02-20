import { UsersService } from './../services/users.service';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLogedIn = false;
  countOfNotifications=0;
  user={Email:"",Role:""};


  constructor(public service: AuthService) { } 
  ngOnInit(): void {
    this.user=this.service.getcurrentUser();
  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logOut() {
    this.service.logout();
  }
  updateNotifications()
  {
      //use interval to refresh and filter new orders withotu change
  }
}
