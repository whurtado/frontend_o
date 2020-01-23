import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClasificacionPagoComponent } from './editar-clasificacion-pago.component';

describe('EditarClasificacionPagoComponent', () => {
  let component: EditarClasificacionPagoComponent;
  let fixture: ComponentFixture<EditarClasificacionPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarClasificacionPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarClasificacionPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
