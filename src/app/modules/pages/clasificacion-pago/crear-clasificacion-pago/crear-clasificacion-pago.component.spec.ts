import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClasificacionPagoComponent } from './crear-clasificacion-pago.component';

describe('CrearClasificacionPagoComponent', () => {
  let component: CrearClasificacionPagoComponent;
  let fixture: ComponentFixture<CrearClasificacionPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearClasificacionPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearClasificacionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
