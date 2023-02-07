import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  GetProducts()
  {
    return this.http.get('https://localhost:7011/api/products');
  }
  GetProduct(id:any)
  {
    return this.http.get('https://localhost:7011/api/products/'+id);
  }
  DeleteProduct(id:any)
  {
    return this.http.delete('https://localhost:7011/api/products/'+id);
  }
  CreateProduct(product:any)
  {
    return this.http.post('https://localhost:7011/api/products', product);
  }
  UpdateProduct(product:any,id:any)
  {
    return this.http.put('https://localhost:7011/api/products/'+id, product);
  }
}
