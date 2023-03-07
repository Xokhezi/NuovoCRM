import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  key="44@!46486686alfa"

   encodeLink(email: string, id: string): string {
    const combined = email + '|' + id;
    const encrypted = AES.encrypt(combined, this.key).toString();
    return encrypted;
  }
  decodeLink(encoded: string): { email: string, id: string } {
    const decrypted = AES.decrypt(encoded, this.key).toString(enc.Utf8);
    const [email, id] = decrypted.split('|');
    return { email, id };
  }
}
