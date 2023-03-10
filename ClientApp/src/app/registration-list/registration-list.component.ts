import { UsersService } from './../services/users.service';
import { PartnersService } from './../services/partners.service';
import { RegistrationsService } from './../services/registrations.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  registrations: any = [];
  lead: any;
  newUser: any;
  newPartner: any;

  constructor(
    private service: RegistrationsService,
    private partnerService: PartnersService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.service.getRegistrations()
      .subscribe(r => this.registrations = r);
  }
  deleteRegistration(registration: any) {
    this.service.deleteRegistration(registration.id)
      .subscribe();
    let i = this.registrations.indexOf(registration, 0)
    this.registrations.splice(i, 1);
  }
  createRegistration(int: any) {
    this.service.getRegistration(int)
      .subscribe((registration: any) => {
        this.newUser = {
          email: registration.email,
          fullName: registration.name + registration.surname,
          password: registration.password,
          role: "obchodní zástupce",
          country: registration.country,
          adress: registration.adress,
          phone: registration.phone
        }
        this.userService.CreateUser(this.newUser)
          .subscribe((r: any) => {
            console.log(registration.leadId);
            this.partnerService.GetPartner(registration.leadId)
              .subscribe((partner: any) => {
                this.newPartner = {
                  name: registration.name,
                  surname: registration.surname,
                  email: registration.email,
                  phone: registration.phone,
                  position: registration.position,
                  adress: registration.adress,
                  leadId: registration.leadId,
                  country: registration.country,
                  userId: r,
                  level: partner.level + 1,
                  teamId: partner.teamId,
                  discountPrimary: 0,
                  discountSecundary: 0
                }
                this.newPartner.discountPrimary = this.discountAssignment(this.newPartner.level, "primary");
                this.newPartner.discountSecundary = this.discountAssignment(this.newPartner.level, "secundary");
                this.partnerService.CreatePartner(this.newPartner)
                  .subscribe();
              });
          });
      });
  }
  //asign discount regarding level and category
  discountAssignment(level: any, category: any) {
    if (category == "primary") {
      switch (level) {
        case 1:
          return 30;
        case 2:
          return 15;
        default:
          return 10;
      }
    }
    else {
      switch (level) {
        case 1:
          return 10;
        case 2:
          return 8;
        default:
          return 6;
      }
    }
  }
}
