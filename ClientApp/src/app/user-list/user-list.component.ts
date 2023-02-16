import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users:any;
  constructor( private service: UsersService) { }
  ngOnInit(): void {
    this.service.GetUsers().subscribe(u=>this.users=u);
    }

}
