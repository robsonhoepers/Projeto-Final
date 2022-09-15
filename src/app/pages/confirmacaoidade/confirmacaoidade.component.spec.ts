import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacaoidadeComponent } from './confirmacaoidade.component';

describe('ConfirmacaoidadeComponent', () => {
  let component: ConfirmacaoidadeComponent;
  let fixture: ComponentFixture<ConfirmacaoidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacaoidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacaoidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
