import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasExamenComponent } from './citas-examen.component';

describe('CitasExamenComponent', () => {
  let component: CitasExamenComponent;
  let fixture: ComponentFixture<CitasExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
