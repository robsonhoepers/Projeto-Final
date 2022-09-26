import { TestBed } from '@angular/core/testing';

import { CachacaService } from './cachaca.service';

describe('CachacaService', () => {
  let service: CachacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CachacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
