import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  localhost=this.service.getLocalHost();
  constructor(private http:HttpClient, private service:LocalhostService) { }
  
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
    return this.http.get(this.localhost+'/api/products',this.getValidation());
  }
  GetProduct(id:any)
  {
    return this.http.get(this.localhost+'/api/products/'+id,this.getValidation());
  }
  DeleteProduct(id:any)
  {
    return this.http.delete(this.localhost+'/api/products/'+id,this.getValidation());
  }
  CreateProduct(product:any)
  {
    return this.http.post(this.localhost+'/api/products', product,this.getValidation());
  }
  UpdateProduct(product:any,id:any)
  {
    return this.http.put(this.localhost+'/api/products/'+id, product,this.getValidation());
  }
}
