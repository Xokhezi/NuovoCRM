import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
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
    return this.http.get('https://localhost:7011/api/users',this.getValidation());
  }
  GetUser(id:any)
  {
    return this.http.get('https://localhost:7011/api/users/'+id,this.getValidation());
  }
  DeleteUser(id:any)
  {
    return this.http.delete('https://localhost:7011/api/users/'+id,this.getValidation());
  }
  CreateUser(user:any)
  {
    return this.http.post('https://localhost:7011/api/users', user,this.getValidation());
  }
  UpdateUser(user:any,id:any)
  {
    return this.http.put('https://localhost:7011/api/users/'+id, user,this.getValidation());
  }
}
