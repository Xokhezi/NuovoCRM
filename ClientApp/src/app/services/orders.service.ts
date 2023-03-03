import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  localhost = this.service.getLocalHost();
  constructor(private http: HttpClient, private service: LocalhostService) { }

  getValidation() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token);
    let options = { headers: headers };

    return options;
  }
  GetOrdersForYear(year?:number) {
    return this.http.get(this.localhost + '/api/orders/'+year, this.getValidation());
  }
  GetOrders() {
    return this.http.get(this.localhost + '/api/orders/', this.getValidation());
  }
  GetOrder(id: any) {
    return this.http.get(this.localhost + '/api/orders/' + id, this.getValidation());
  }
  DeleteOrder(id: any) {
    return this.http.delete(this.localhost + '/api/orders/' + id, this.getValidation());
  }
  CreateOrder(order: any) {
    return this.http.post(this.localhost + '/api/orders', order, this.getValidation());
  }
  UpdateOrder(order: any, id: any) {
    return this.http.put(this.localhost + '/api/orders/' + id, order, this.getValidation());
  }
}
