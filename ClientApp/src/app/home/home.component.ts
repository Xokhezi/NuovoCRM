import { PartnersService } from './../services/partners.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  partners: any;
  loading = true;

  constructor(private partnersService: PartnersService) { }
  ngOnInit(): void {
    this.partnersService.GetPartners().subscribe((p: any) =>{
      this.partners = p;
      this.loading = false;});
  }
  search(input: string) {
    this.partnersService.GetPartners().subscribe(p => {
      this.partners = p;
      const inputUp = input.toUpperCase();
      this.partners = this.getFullNames().filter((n:any) => n.fullName.toUpperCase().includes(inputUp));
    });
  }

  getFullNames() {
    let names = this.partners.map((p: any) => p.name);
    let surnames = this.partners.map((p: any) => p.surname);
    let fullnames = names.map((namesElement: any, index: string | number) => {
      return `${namesElement} ${surnames[index]}`;
    });
    let extendedPartners = this.partners.map((person: any, index: string | number) => {
      return { ...person, fullName: fullnames[index] };
    });
    return extendedPartners;
  }
}
