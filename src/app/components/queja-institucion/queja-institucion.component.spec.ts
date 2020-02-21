import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaInstitucionComponent } from './queja-institucion.component';

describe('QuejaInstitucionComponent', () => {
  let component: QuejaInstitucionComponent;
  let fixture: ComponentFixture<QuejaInstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejaInstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaInstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
