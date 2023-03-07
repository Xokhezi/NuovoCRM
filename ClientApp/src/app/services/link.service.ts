import { Injectable } from '@angular/core';
import { AES } from 'crypto-js';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor() { }

  key="44@!46486686alfa"

   encodeLink(email: string, id: string): string {
    const combined = email + '|' + id;
    const encrypted = AES.encrypt(combined, this.key).toString();
    const encoded = encodeURIComponent(btoa(encrypted)).replace(/%2F/g, '_').replace(/%2B/g, '-').replace(/%3D/g, '');
    return encoded;
  }
  decodeLink(encoded: string): [string, string] {
    const base64 = decodeURIComponent(encoded.replace(/_/g, '%2F').replace(/-/g, '%2B') + '==');
    const decrypted = AES.decrypt(atob(base64), this.key).toString(CryptoJS.enc.Utf8);
    const [email, id] = decrypted.split('|');
    return [email, id];
}
}
