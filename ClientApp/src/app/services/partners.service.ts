import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http:HttpClient) { }
  getValidation()
  {
    let headers=new HttpHeaders();
    let token = localStorage.getItem('token');
    headers = headers.append('Authorization', 'Bearer '+ token);
    let options = {headers:headers};

    return options;
  }
  GetPartners()
  {
    return this.http.get('https://localhost:7011/api/partners',this.getValidation());
  }
  GetPartner(id:any)
  {
    return this.http.get('https://localhost:7011/api/partners/'+id,this.getValidation());
  }
  DeletePartner(id:any)
  {
    return this.http.delete('https://localhost:7011/api/partners/'+id,this.getValidation());
  }
  CreatePartner(partner:any)
  {
    return this.http.post('https://localhost:7011/api/partners', partner,this.getValidation());
  }
}
