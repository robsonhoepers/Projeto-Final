import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroprodutosComponent } from './cadastroprodutos.component';

describe('CadastroprodutosComponent', () => {
  let component: CadastroprodutosComponent;
  let fixture: ComponentFixture<CadastroprodutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroprodutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
