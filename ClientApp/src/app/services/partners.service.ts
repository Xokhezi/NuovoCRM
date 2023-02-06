import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  constructor(private http:HttpClient) { }
  GetPartners()
  {
    return this.http.get('https://localhost:7011/api/partners');
  }
  GetPartner(id:any)
  {
    return this.http.get('https://localhost:7011/api/partners/'+id);
  }
  DeletePartner(id:any)
  {
    return this.http.delete('https://localhost:7011/api/partners/'+id);
  }
  CreatePartner(partner:any)
  {
    return this.http.post('https://localhost:7011/api/partners', partner);
  }
}
