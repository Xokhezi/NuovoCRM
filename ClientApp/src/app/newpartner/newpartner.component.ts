import { UsersService } from './../services/users.service';
import { PartnersService } from './../services/partners.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-newpartner',
  templateUrl: './newpartner.component.html',
  styleUrls: ['./newpartner.component.css']
})
export class NewpartnerComponent implements OnInit {
  complete = false;
  hover = false;
  invalidPasswords=false;
  partners: any;
  id: any;
  isPartner: any;
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
    teamId: 0
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

  constructor(private active: ActivatedRoute, private partnerService: PartnersService, private router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.partnerService.GetPartners().subscribe(p => this.partners = p);
    this.active.paramMap.subscribe(params => {
      this.id = params.get('id?');
      if (this.id != 0) {
        this.partnerService.GetPartner(this.id)
          .subscribe((p: any) => this.partner = p);
      }
    })

  }
  submit(f: any) {
    if (this.id == 0) {
      this.partnerService.GetPartner(this.partner.leadId)
        .subscribe(({ level, teamId }: any) => {
          this.partner.level = level + 1;
          this.partner.teamId = level === 0 ?
            Math.max(...this.partners.map(({ teamId }: any) => teamId)) + 1 :
            teamId;

          this.partnerService.CreatePartner(this.partner)
            .subscribe(() => this.router.navigate(['/partners']));
        });
      if (this.isPartner&&this.user.password==this.user.passwordRepeat) {
        let userToCreate = {
          email: this.partner.email,
          fullName: this.partner.name+this.partner.surname,
          password: this.partner.email,
          role: this.user.role,
          country: this.partner.adress,
          adress: this.partner.adress,
          phone: this.partner.phone
        };
        this.userService.CreateUser(userToCreate)
        .subscribe(r=>console.log(r));       
      }
      else
      this.invalidPasswords=true;
    }
    else
      this.partnerService.UpdatePartner(this.partner, this.id).subscribe(r => this.router.navigate(['/partners']));
  }
  switch() {
    this.hover = !this.hover;
  }
}
