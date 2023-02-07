import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.service.GetProducts()
    .subscribe(p=>this.products=p);
    
  }

}
