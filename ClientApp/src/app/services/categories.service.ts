import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  localhost = this.service.getLocalHost();
  constructor(private http: HttpClient, private service: LocalhostService) { }

  getValidation() {
    let headers = new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer ' + token);
    let options = { headers: headers };

    return options;
  }
  GetCategories() {
    return this.http.get(this.localhost + '/api/categories', this.getValidation());
  }
  GetCategory(id: any) {
    return this.http.get(this.localhost + '/api/categories/' + id, this.getValidation());
  }  
}
