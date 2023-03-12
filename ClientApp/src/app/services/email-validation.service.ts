import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalhostService } from './localhost.service';

@Injectable({
  providedIn: 'root'
})
export class EmailValidationService {

  constructor(private http: HttpClient, private service: LocalhostService) { }
  localhost = this.service.getLocalHost();

  getEmalValidation(query: any) {
    return this.http.post(this.localhost + '/api/validation', query);
  }
}
