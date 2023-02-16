import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalhostService {

  constructor() { }

  getLocalHost()
  {
    let localhost="https://localhost:7011";
    return localhost;
  }
}
