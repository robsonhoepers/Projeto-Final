import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoscadastradosComponent } from './produtoscadastrados.component';

describe('ProdutoscadastradosComponent', () => {
  let component: ProdutoscadastradosComponent;
  let fixture: ComponentFixture<ProdutoscadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoscadastradosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoscadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
