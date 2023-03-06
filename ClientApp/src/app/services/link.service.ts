import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  createLink() {
    let email = "example@email.com";
    let encodedEmail = btoa(email);
    console.log(encodedEmail);
  }
}
