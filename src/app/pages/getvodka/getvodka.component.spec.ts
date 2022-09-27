import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetvodkaComponent } from './getvodka.component';

describe('GetvodkaComponent', () => {
  let component: GetvodkaComponent;
  let fixture: ComponentFixture<GetvodkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetvodkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetvodkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
