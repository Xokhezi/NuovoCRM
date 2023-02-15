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
  hover=false;
  partners: any;
  id:any;
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
  }

  constructor(private active: ActivatedRoute, private partnerService: PartnersService, private router: Router) { }

  ngOnInit(): void {
    this.partnerService.GetPartners().subscribe(p => this.partners = p);
    this.active.paramMap.subscribe(params => {
      this.id = params.get('id?');
      if (this.id != 0) {
        this.partnerService.GetPartner(this.id)
          .subscribe((p:any) =>this.partner = p);
      }
    })

  }
  submit(f: any) {
    if(this.id==0){
    this.partnerService.GetPartner(this.partner.leadId)
      .subscribe(({level, teamId}: any) => {
        this.partner.level = level + 1;
        this.partner.teamId = level === 0 ?
          Math.max(...this.partners.map(({teamId}: any) => teamId)) + 1 :
          teamId;

        this.partnerService.CreatePartner(this.partner)
          .subscribe(() => this.router.navigate(['/partners']));
      });
    }
    else 
      this.partnerService.UpdatePartner(this.partner,this.id).subscribe(r=>this.router.navigate(['/partners']));
  }
  switch() {
    this.hover = !this.hover;
  }
}
