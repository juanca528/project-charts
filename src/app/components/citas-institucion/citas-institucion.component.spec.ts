import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasInstitucionComponent } from './citas-institucion.component';

describe('CitasInstitucionComponent', () => {
  let component: CitasInstitucionComponent;
  let fixture: ComponentFixture<CitasInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
