import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasEspecialidadComponent } from './citas-especialidad.component';

describe('CitasEspecialidadComponent', () => {
  let component: CitasEspecialidadComponent;
  let fixture: ComponentFixture<CitasEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
