import { ProductsService } from './../services/products.service';
import { PartnersService } from './../services/partners.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-partner',
  templateUrl: './single-partner.component.html',
  styleUrls: ['./single-partner.component.css']
})
export class SinglePartnerComponent implements OnInit {
  id: any;
  lead = {
    id: 0,
    name: "",
    surname: "",
    email: "",
    phone: "",
    position:"",
    level: 0,
    leadId: 0
  };
  partner = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    position:"",
    level: 0,
    leadId: 0
  };
  products:any;
  constructor(private active: ActivatedRoute, private partnerService: PartnersService, private productServis:ProductsService) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params => this.id = params.get('id'));
    this.partnerService.GetPartner(this.id).subscribe((p: any) => {
      this.partner = p;
      this.partnerService.GetPartner(this.partner.leadId).subscribe((p: any) => this.lead = p);
    });
    this.productServis.GetProducts().subscribe(p=>this.products=p);

  }
}
