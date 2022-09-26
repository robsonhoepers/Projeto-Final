import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcachacaComponent } from './getcachaca.component';

describe('GetcachacaComponent', () => {
  let component: GetcachacaComponent;
  let fixture: ComponentFixture<GetcachacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcachacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcachacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
