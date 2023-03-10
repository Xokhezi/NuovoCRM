import { PartnersService } from './../services/partners.service';
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
  currentUser: any;
  usersLink: any;
  currentPartner: any;
  lead: any;
  query: any;

  switch = false;
  showLink = false;

  constructor(
    private service: PartnersService,
    private authService: AuthService,
    private linkService: LinkService) { }

  ngOnInit(): void {
    this.currentUser = this.authService.getcurrentUser();
    this.query = { email: this.currentUser.Email };
    this.currentPartner = this.service.GetSecurePartner(this.query)
      .subscribe((r: any) => {
        this.currentPartner = r;
        this.service.GetPartner(r.leadId)
          .subscribe(({ surname }: any) => this.lead = { surname });
      });
    this.usersLink = this.linkService.encodeLink(this.currentUser.Email, this.currentUser.Id);
  }
  show() {
    this.showLink = true;
  }
  switchInfo() {
    this.switch = !this.switch;
  }
}
