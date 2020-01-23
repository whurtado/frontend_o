import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificacionPagoComponent } from './clasificacion-pago.component';

describe('ClasificacionPagoComponent', () => {
  let component: ClasificacionPagoComponent;
  let fixture: ComponentFixture<ClasificacionPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificacionPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificacionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
