import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoupdateComponent } from './produtoupdate.component';

describe('ProdutoupdateComponent', () => {
  let component: ProdutoupdateComponent;
  let fixture: ComponentFixture<ProdutoupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoupdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutoupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
