import { fadeIn} from './../animations/animations';
import { Router } from '@angular/router';
import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [
    fadeIn
  ]
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.service.GetProducts()
      .subscribe(p => this.products = p);
  }
  DeleteProduct(int: any) {
    if (confirm("Opravdu vymazat produkt?"))
      this.service.DeleteProduct(int)
        .subscribe({
          complete: () => { this.router.navigate(['/products']); }
        });

  }

}
