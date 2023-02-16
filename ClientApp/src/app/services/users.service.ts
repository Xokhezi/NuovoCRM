import { LocalhostService } from './localhost.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
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
  GetUsers()
  {
    return this.http.get(this.localhost+'/api/users',this.getValidation());
  }
  GetUser(id:any)
  {
    return this.http.get(this.localhost+'/api/users/'+id,this.getValidation());
  }
  DeleteUser(id:any)
  {
    return this.http.delete(this.localhost+'/api/users/'+id,this.getValidation());
  }
  CreateUser(user:any)
  {
    return this.http.post(this.localhost+'/api/users', user,this.getValidation());
  }
  UpdateUser(user:any,id:any)
  {
    return this.http.put(this.localhost+'/api/users/'+id, user,this.getValidation());
  }
}
