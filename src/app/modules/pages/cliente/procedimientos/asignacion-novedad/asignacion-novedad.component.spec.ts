import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionNovedadComponent } from './asignacion-novedad.component';

describe('AsignacionNovedadComponent', () => {
  let component: AsignacionNovedadComponent;
  let fixture: ComponentFixture<AsignacionNovedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionNovedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionNovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
