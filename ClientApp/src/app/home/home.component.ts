import { PartnersService } from './../services/partners.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  partners:any;
  
  constructor(private partnersService:PartnersService) {}
  ngOnInit(): void {
    this.partnersService.GetPartners().subscribe((p: any) =>this.partners = p);
  }
}
