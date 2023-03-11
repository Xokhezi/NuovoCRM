import { UsersService } from './../services/users.service';
import { PartnersService } from './../services/partners.service';
import { LinkService } from './../services/link.service';
import { RegistrationsService } from './../services/registrations.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  passwordRepeat: any;
  link: any;
  lead: any;

  passwordsValid = true;
  emailValid = true;

  registration = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    position: "",
    adress: "",
    country: "",
    leadId: 0,
    leadSurname: ""
  };

  step: any;
  isEditable = false;

  constructor(
    private linkService: LinkService,
    private service: RegistrationsService,
    private active: ActivatedRoute,
    private partnersService: PartnersService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.step = 1;
    this.active.paramMap.subscribe(params => {
      this.link = params.get('link');
      this.link = this.linkService.decodeLink(this.link);
      this.partnersService.GetPartners()
        .subscribe((r: any) => {
          this.lead = r.find((p: any) => p.userId == this.link[1]);
          this.registration.leadId = this.lead.id;
          this.registration.leadSurname = this.lead.surname;
        });
    });
  }
  validateEmail() {
    this.userService.GetUsers()
      .subscribe((r: any) => {
        let partner = r.find((p: any) => p.email == this.registration.email);
        if (!partner) {
          this.emailValid = true;
          this.registration.email = this.registration.email.toLocaleUpperCase();
        }
        else
          this.emailValid = false;     
      })
  }
  toDetail() {
    if (this.passwordRepeat === this.registration.password &&this.emailValid)
      this.step = 2;
    else
      this.emailValid = false;
  }
  register() {
    this.service.register(this.registration)
      .subscribe((r: any) => {
        this.step = 3;
      });
  }
}
