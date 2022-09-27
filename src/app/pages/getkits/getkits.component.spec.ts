import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetkitsComponent } from './getkits.component';

describe('GetkitsComponent', () => {
  let component: GetkitsComponent;
  let fixture: ComponentFixture<GetkitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetkitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetkitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
