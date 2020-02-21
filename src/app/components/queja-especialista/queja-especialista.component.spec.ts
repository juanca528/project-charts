import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuejaEspecialistaComponent } from './queja-especialista.component';

describe('QuejaEspecialistaComponent', () => {
  let component: QuejaEspecialistaComponent;
  let fixture: ComponentFixture<QuejaEspecialistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuejaEspecialistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuejaEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
