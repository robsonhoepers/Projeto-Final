import { TestBed } from '@angular/core/testing';

import { CadastroendService } from './cadastroend.service';

describe('CadastroendService', () => {
  let service: CadastroendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
