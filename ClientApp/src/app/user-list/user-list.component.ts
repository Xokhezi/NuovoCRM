import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: any;
  constructor(private service: UsersService, private router: Router) { }
  ngOnInit(): void {
    this.service.GetUsers().subscribe(u => this.users = u);
  }
  deleteUser(id: any) {
    if (confirm("Opravdu vymazat partnera?"))
      this.service.DeleteUser(id).subscribe(r => window.location.reload());
  }
}
