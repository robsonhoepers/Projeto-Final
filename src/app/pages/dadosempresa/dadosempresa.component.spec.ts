import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosempresaComponent } from './dadosempresa.component';

describe('DadosempresaComponent', () => {
  let component: DadosempresaComponent;
  let fixture: ComponentFixture<DadosempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosempresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
