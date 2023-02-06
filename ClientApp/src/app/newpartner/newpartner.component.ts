import { PartnersService } from './../services/partners.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpartner',
  templateUrl: './newpartner.component.html',
  styleUrls: ['./newpartner.component.css']
})
export class NewpartnerComponent implements OnInit {
  complete=false;
  partners:any;
  partner={
    id:0,
    name:"",
    surname:"",
    email:"",
    phone:"",
    position:"",
    adress:"",
    leadId:0,
    level:0
  }

  constructor(private partnerService:PartnersService, private router:Router) { }

  ngOnInit(): void {
    this.partnerService.GetPartners().subscribe(p=>this.partners=p);
  }
  submit(f:any)
  {    
    this.partnerService.GetPartner(this.partner.leadId)
    .subscribe((r:any)=>this.partner.level=r.level+1);
    this.partnerService.CreatePartner(this.partner)
    .subscribe(r=>{                 
        setTimeout(() => {
          this.complete = true;
        }, 300);
        this.router.navigate(['/']);
      }
      
    );       
  }
}
