import { Router } from '@angular/router';
import { fadeIn, fadeSideLeft, fadeSideRight } from './../animations/animations';
import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeIn,
    fadeSideLeft,
    fadeSideRight
  ]
})
export class HomeComponent {
  user = { Role: '' };
  promo = false;

  constructor(public service: AuthService, private route: Router) { }
  ngOnInit(): void {
    this.user = this.service.getcurrentUser();
  }
  toShop() {
    this.route.navigate(['shop']);
  }
  toOrders() {
    this.route.navigate(['orders/my']);
  }
  slidePromo() {
    this.promo = !this.promo
  }

}
