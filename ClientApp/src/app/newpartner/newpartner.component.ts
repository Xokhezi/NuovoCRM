import { PartnersService } from './../services/partners.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpartner',
  templateUrl: './newpartner.component.html',
  styleUrls: ['./newpartner.component.css']
})
export class NewpartnerComponent implements OnInit {
  complete:any;
  partner={
    id:0,
    name:"",
    surname:"",
    email:"",
    phone:"",
    level:0,
    leadId:0
  }

  constructor(private partnerService:PartnersService) { }

  ngOnInit(): void {
  }
  submit(f:any)
  {}

}
