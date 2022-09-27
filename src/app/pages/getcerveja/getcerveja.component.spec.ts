import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcervejaComponent } from './getcerveja.component';

describe('GetcervejaComponent', () => {
  let component: GetcervejaComponent;
  let fixture: ComponentFixture<GetcervejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcervejaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcervejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
