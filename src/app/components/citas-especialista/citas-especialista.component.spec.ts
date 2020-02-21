import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasEspecialistaComponent } from './citas-especialista.component';

describe('CitasEspecialistaComponent', () => {
  let component: CitasEspecialistaComponent;
  let fixture: ComponentFixture<CitasEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
