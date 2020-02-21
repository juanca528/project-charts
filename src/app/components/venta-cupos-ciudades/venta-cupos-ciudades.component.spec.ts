import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaCuposCiudadesComponent } from './venta-cupos-ciudades.component';

describe('VentaCuposCiudadesComponent', () => {
  let component: VentaCuposCiudadesComponent;
  let fixture: ComponentFixture<VentaCuposCiudadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaCuposCiudadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaCuposCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
