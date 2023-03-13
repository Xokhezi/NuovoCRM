import { TestBed } from '@angular/core/testing';

import { RegisteredauthService } from './registeredauth.service';

describe('RegisteredauthService', () => {
  let service: RegisteredauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
