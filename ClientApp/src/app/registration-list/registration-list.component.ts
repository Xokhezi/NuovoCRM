import { PartnersService } from './../services/partners.service';
import { RegistrationsService } from './../services/registrations.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css']
})
export class RegistrationListComponent {
  registrations: any=[];
  lead: any;

  constructor(private service: RegistrationsService, private parnterService: PartnersService) { }

  ngOnInit(): void {
    this.service.getRegistrations()
      .subscribe(r => this.registrations = r);
  }
  deleteRegistration(registration:any)
  {
    this.service.deleteRegistration(registration.id)
    .subscribe();
    let i =this.registrations.indexOf(registration, 0)
    this.registrations.splice(i,1);

  }
}
