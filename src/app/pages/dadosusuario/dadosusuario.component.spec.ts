import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosusuarioComponent } from './dadosusuario.component';

describe('DadosusuarioComponent', () => {
  let component: DadosusuarioComponent;
  let fixture: ComponentFixture<DadosusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosusuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
