import { AuthService } from './../services/auth.service';
import { fadeleft, faderight } from './../animations/animations';
import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';
import { cart } from '../animations/animations';
import { object } from 'underscore';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  animations: [
    cart,
    fadeleft,
    faderight
  ]
})
export class ShopComponent {

  loading = true;
  expanded = false;
  hover = false;
  toOrder = false;
  finishedOrder = false;

  products: any;
  cart: any;
  totalPrize: any;


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
    teamId: 0,
    country: "",
    userId: 0
  };
  user: any;

  constructor(private productService: ProductsService, private authService: AuthService) { }

  ngOnInit(): void {
    this.cart = [];
    this.user = this.authService.getcurrentUser();
    this.productService.GetProducts().subscribe((p: any) => {
      this.products = p.map((pr: any) => {
        return {
          ...pr,
          count: 1
        }
      })
      this.loading = false;
    });
  }
  search(input: string) {
    this.productService.GetProducts().subscribe((p: any) => {
      this.products = p.map((pr: any) => {
        return {
          ...pr,
          count: 1
        }
      })
      const inputUp = input.toUpperCase();
      this.products = this.products.filter((n: any) => n.name.toUpperCase().includes(inputUp));
    });
  }
  switch() {
    this.expanded = !this.expanded;
  }
  switchHover() {
    this.hover = !this.hover;
  }
  increasePcs(product: any) {
    return product.count++;
  }
  decreasePcs(product: any) {
    if (product.count > 1)
      return product.count--;
    else
      return product.count;
  }
  addToCart(product: any) {
    if (!this.checkCart(product.name)) {
      this.cart.push(product);
      this.totalPrize = this.cart.reduce((ac: any, currentPrize: { prize: any; count: any }) => {
        if (currentPrize.count! < 1)
          return ac + currentPrize.prize * currentPrize.count;
        else
          return ac + currentPrize.prize
      }, 0);
    }    
  }
  summarize() {
    this.totalPrize = this.cart.reduce((ac: any, currentPrize: { prize: any; count: any }) => {
      if (currentPrize.count! > 1)
        return ac + currentPrize.prize * currentPrize.count;
      else
        return ac + currentPrize.prize
    }, 0);
    console.log(this.totalPrize)
  }
  toOrderForm() {
    this.toOrder = !this.toOrder
  }
  createOrder(f: any) {
    console.log(f);
    this.finishedOrder = true;
    this.toOrder = false;
  }
  checkCart(productName: any) {
    let names: any[] = [];
    this.cart.map((n: any) => names.push(n.name));
    return names.includes(productName);
  }
  removeFromCart(p:any)
  {
    this.cart.splice(p,1);
  }
}