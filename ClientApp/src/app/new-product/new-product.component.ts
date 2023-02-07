import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  id:any;
  constructor(private active:ActivatedRoute) {  }
  ngOnInit(): void {
    this.active.paramMap.subscribe(params =>{ this.id = params.get('id?');
  console.log(this.id)});
  }
    
}
