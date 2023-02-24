import { CategoriesService } from './../services/categories.service';
import { ProductsService } from './../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  hover = false;

  id: any;

  product = {
    id: 0,
    name: "",
    productCode: "",
    prize: 0,
    discount: 0,
    discountStep: 0,
    url: "",
    description: ""
  };

  constructor(
    private active: ActivatedRoute,
    private servis: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.active.paramMap.subscribe(params => {
      this.id = params.get('id?');
      if (this.id != 0) {
        this.servis.GetProduct(this.id)
          .subscribe((p: any) => this.product = p);
      }
    })
  }
  switch() {
    this.hover = !this.hover;
  }
  submit() {
    if (this.id == 0)
      this.servis.CreateProduct(this.product).subscribe(r => this.router.navigate(['/products']));
    else
      this.servis.UpdateProduct(this.product, this.id).subscribe(r => this.router.navigate(['/products']));
  }


}



