import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachacaComponent } from './cachaca.component';

describe('CachacaComponent', () => {
  let component: CachacaComponent;
  let fixture: ComponentFixture<CachacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CachacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
