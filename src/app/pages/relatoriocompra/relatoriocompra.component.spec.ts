import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriocompraComponent } from './relatoriocompra.component';

describe('RelatoriocompraComponent', () => {
  let component: RelatoriocompraComponent;
  let fixture: ComponentFixture<RelatoriocompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatoriocompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatoriocompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
