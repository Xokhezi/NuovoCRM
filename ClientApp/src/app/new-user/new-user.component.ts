import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  user={
    email: "",
    fullName: "",
    password: "",
    role: "",
    country: "",
    adress: "",
    phone: "" ,
    passwordRepeat:""  
  };
  passwordRepeat:any;
  id:any;
  hover=false;
  
  constructor(private service:UsersService, private active:ActivatedRoute) {}
  ngOnInit(): void {    
    this.active.paramMap.subscribe(params => {
      this.id = params.get('id?');
      if (this.id != 0) {
        this.service.GetUser(this.id)
          .subscribe((u:any) =>this.user = u);
      }
    })

  }
  switch()
  {
    this.hover=!this.hover;
  }
  submit()
  {

  }

}
