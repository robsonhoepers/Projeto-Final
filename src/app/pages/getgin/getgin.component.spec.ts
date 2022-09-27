import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetginComponent } from './getgin.component';

describe('GetginComponent', () => {
  let component: GetginComponent;
  let fixture: ComponentFixture<GetginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
