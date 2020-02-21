import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCuposVendedorComponent } from './venta-cupos-vendedor.component';

describe('VentaCuposVendedorComponent', () => {
  let component: VentaCuposVendedorComponent;
  let fixture: ComponentFixture<VentaCuposVendedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaCuposVendedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCuposVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
