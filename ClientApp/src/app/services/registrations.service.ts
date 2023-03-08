import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {
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

  register(newUser:any)
  {
    return this.http.post(this.localhost+'/api/registration', newUser)
  }
  getRegistrations()
  {
    return this.http.get(this.localhost+'/api/registration/',this.getValidation());
  }
  deleteRegistration(id: any) {
    return this.http.delete(this.localhost + '/api/registration/' + id, this.getValidation());
  }
}
