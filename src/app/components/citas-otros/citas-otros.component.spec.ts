import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasOtrosComponent } from './citas-otros.component';

describe('CitasOtrosComponent', () => {
  let component: CitasOtrosComponent;
  let fixture: ComponentFixture<CitasOtrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasOtrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitasOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
