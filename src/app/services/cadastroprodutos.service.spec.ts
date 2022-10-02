import { TestBed } from '@angular/core/testing';

import { CadastroprodutosService } from './cadastroprodutos.service';

describe('CadastroprodutosService', () => {
  let service: CadastroprodutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroprodutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
