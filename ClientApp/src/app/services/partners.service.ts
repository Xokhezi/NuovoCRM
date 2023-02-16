import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

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
  GetPartners()
  {
    return this.http.get(this.localhost+'/api/partners',this.getValidation());
  }
  GetPartner(id:any)
  {
    return this.http.get(this.localhost+'/api/partners/'+id,this.getValidation());
  }
  DeletePartner(id:any)
  {
    return this.http.delete(this.localhost+'/api/partners/'+id,this.getValidation());
  }
  CreatePartner(partner:any)
  {
    return this.http.post(this.localhost+'/api/partners', partner,this.getValidation());
  }
  UpdatePartner(partner:any,id:any)
  {
    return this.http.put(this.localhost+'/api/partners/'+id, partner,this.getValidation());
  }
}
