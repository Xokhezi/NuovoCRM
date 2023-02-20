import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  localhost = this.service.getLocalHost();
  constructor(private http: HttpClient, private service: LocalhostService) { }

  login(credentials: any) {
    return this.http.post(this.localhost + '/api/auth', credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    let jwtHelper = new JwtHelperService();

    if (token)
      return true;
    else
      return false;
  }
  getcurrentUser() {
    let token = localStorage.getItem('token');
    if (!token)
      return null;
    let jwtHelper = new JwtHelperService();

    return jwtHelper.decodeToken(token);
  }
  isAdmin() {
    let user =this.getcurrentUser();
    if (user.Role!= "admin")
      return false;

    return true;
  }
}
