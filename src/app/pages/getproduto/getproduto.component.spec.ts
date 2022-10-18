import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetprodutoComponent } from './getproduto.component';

describe('GetprodutoComponent', () => {
  let component: GetprodutoComponent;
  let fixture: ComponentFixture<GetprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetprodutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
