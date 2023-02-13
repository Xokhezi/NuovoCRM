import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post('https://localhost:7011/api/auth', credentials)
      .subscribe((r: any) => localStorage.setItem('token', r.token));
  }
  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    
    let token = localStorage.getItem('token');
    if (token)
      return true;
    else
      return false;
  } 
}
