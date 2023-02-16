import { TestBed } from '@angular/core/testing';

import { LocalhostService } from './localhost.service';

describe('LocalhostService', () => {
  let service: LocalhostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalhostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
