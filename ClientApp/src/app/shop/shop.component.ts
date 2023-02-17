import { ProductsService } from './../services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products:any;
  loading=true;
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.productService.GetProducts().subscribe((p: any) =>{
      this.products = p;
      this.loading = false;});
      
  }

}
