import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: any;
  loading = true;  
  expanded = false;
  hover= false;

  constructor(private productService: ProductsService) { }
  
  ngOnInit(): void {
    this.productService.GetProducts().subscribe((p: any) => {
      this.products = p;
      this.loading = false;
    });
  }
  search(input: string) {
    this.productService.GetProducts().subscribe(p => {
      this.products = p;
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
}
