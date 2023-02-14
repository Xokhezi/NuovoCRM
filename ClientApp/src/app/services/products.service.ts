import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getValidation()
  {
    let headers=new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer '+ token);
    let options = {headers:headers};

    return options;
  }
  GetProducts()
  {
    return this.http.get('https://localhost:7011/api/products',this.getValidation());
  }
  GetProduct(id:any)
  {
    return this.http.get('https://localhost:7011/api/products/'+id,this.getValidation());
  }
  DeleteProduct(id:any)
  {
    return this.http.delete('https://localhost:7011/api/products/'+id,this.getValidation());
  }
  CreateProduct(product:any)
  {
    return this.http.post('https://localhost:7011/api/products', product,this.getValidation());
  }
  UpdateProduct(product:any,id:any)
  {
    return this.http.put('https://localhost:7011/api/products/'+id, product,this.getValidation());
  }
}
