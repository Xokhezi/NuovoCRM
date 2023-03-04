import { UsersService } from './../services/users.service';
import { ProductsService } from './../services/products.service';
import { PartnersService } from './../services/partners.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-partner',
  templateUrl: './single-partner.component.html',
  styleUrls: ['./single-partner.component.css']
})
export class SinglePartnerComponent implements OnInit {
  partners: any;
  team: any;
  id: any;
  directTeam:any;
  member = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    level: 0,
    leadId: 0,
    teamId: 0,
    adress: "",
    country: "",
    userId: 0
  };
  lead = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    level: 0,
    leadId: 0,
    country: "",
    userId: 0
  };
  partner = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    phone: "",
    position: "",
    level: 0,
    leadId: 0,
    teamId: 0,
    adress: "",
    country: "",
    userId: 0,
    discountPrimary:0,
    discountSecundary:0
    
  };
  products: any;
  hover: any;
  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private partnerService: PartnersService,
    private productServis: ProductsService,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.team = [];
    this.directTeam= [];
    this.partners= [];
    this.active.paramMap.subscribe(params => this.id = params.get('id'));
    this.partnerService.GetPartner(this.id).subscribe((p: any) => {
      this.partner = p;
      this.member=p;
           
      this.partnerService.GetPartner(this.partner.leadId).subscribe((p: any) => this.lead = p);
      this.partnerService.GetPartners().subscribe((p: any) => {
        this.team = p.filter((p: any) => p.teamId === this.partner.teamId);
        this.partners=p;   
        //while(this.member.level!=0)
        //{       this.getTeam();       
      });
    });
    this.productServis.GetProducts().subscribe(p => this.products = p);
  }
  switch() {
    this.hover = !this.hover;
  }
  deletePartner() {
    if (this.partner.userId != 0) {
      console.log(this.partner)
      if (confirm("S partnerem je pojen i uživatelský účet. Přejete si smazat oba účty?")) {
        this.partnerService.DeletePartner(this.partner.id)
          .subscribe();
        this.userService.DeleteUser(this.partner.userId)
          .subscribe(r => this.router.navigate(['/partners']));
      }
    }
    else {
      if (confirm("Opravdu vymazat partnera?"))
        this.partnerService.DeletePartner(this.partner.id)
          .subscribe(r => this.router.navigate(['/partners']));
    }
  }
  getTeam()
  {
    this.directTeam.push(this.member);
    this.member=this.partners.find((p:any)=>p.id==this.member.leadId);
  }  
}
