import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../services/users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
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
  invalidPassword = false;
  passwordRepeat: any;
  id: any;
  isPartner:any;
  hover = false;

  constructor(private service: UsersService, private active: ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.isPartner=false;
    this.active.paramMap.subscribe(params => {
      this.id = params.get('id?');
      if (this.id != 0) {
        this.service.GetUser(this.id)
          .subscribe((u: any) => this.user = u);
      }
    })

  }
  test()
  {
    console.log(this.isPartner)
  }
  switch() {
    this.hover = !this.hover;
  }
  submit() {
    if (this.user.password === this.user.passwordRepeat) {
      let userForApi = {
        email: this.user.email,
        fullName: this.user.fullName,
        password: this.user.password,
        role: this.user.role,
        country: this.user.country,
        adress: this.user.adress,
        phone: this.user.phone,

      };

      if (this.user.id == 0)
        this.service.CreateUser(userForApi)
        .subscribe(r=>this.router.navigate(['/users']));
      else
        this.service.UpdateUser(userForApi, this.user.id)
        .subscribe(r=>this.router.navigate(['/users']))

    }

    else
      this.invalidPassword = true;

  }

}
